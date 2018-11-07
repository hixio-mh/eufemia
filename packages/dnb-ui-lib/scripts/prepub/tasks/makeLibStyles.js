/**
 * Prepublish Task
 *
 */

import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'gulp-postcss'
// import babel from 'gulp-babel'
// import sourcemaps from 'gulp-sourcemaps'
import cssnano from 'gulp-cssnano'
import clone from 'gulp-clone'
import rename from 'gulp-rename'
import transform from 'gulp-transform'
import { log } from '../../lib'

export default async () => {
  await compileSass()
}

const compileSass = () =>
  new Promise(async (resolve, reject) => {
    try {
      await runFactory('components')
      await runFactory('patterns')
      resolve()
    } catch (e) {
      reject(e)
    }
  })

export const runFactory = (src, { returnResult = false } = {}) =>
  new Promise((resolve, reject) => {
    log.text = `> PrePublish: converting sass to css | ${src} styles`

    try {
      // do not use 'node-sass-json-importer' here! Every file needs the same core imports over and over again.
      const stream = sass().on('error', sass.logError)
      const cloneSink = clone.sink()
      gulp
        .src(
          /^\.\//.test(src) ? src : `./src/${src}/**/style/dnb-*.scss`,
          {
            cwd: process.env.ROOT_DIR
          }
        )
        .pipe(stream)
        .pipe(
          rename(path => {
            // make sure we eliminate the whole path, so we can safe the files all together in the same directory
            if (!/^\.\//.test(src)) {
              path.dirname = src
            }
            return path
          })
        )
        .pipe(transform('utf8', transformContent))
        .pipe(
          postcss([
            autoprefixer({
              browsers: ['last 2 versions', 'explorer >= 11']
            })
          ])
        )
        .pipe(cloneSink)
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(cloneSink.tap())
        .pipe(
          returnResult
            ? transform('utf8', result => resolve(result))
            : gulp.dest('./style', {
                cwd: process.env.ROOT_DIR
              })
        )
        .on('end', resolve)
        .on('error', reject)
    } catch (e) {
      reject(e)
    }
  })

const transformContent = (content, file) => {
  log.text = `> PrePublish: converting sass to css | ${file.path}`
  return content.replace(new RegExp('../../../assets/', 'g'), '../assets/')
}
