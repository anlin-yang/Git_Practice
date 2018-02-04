// 改变libuv线程池的大小为100
process.env.UV_THREADPOOL_SIZE = 100;

// 获取Node进程当前的工作目录
const cwd = process.cwd();

// 获取绝对路径
const abspath = function (path) {
  if(path[0] === '/') {
    return path;
  } else {
    return path.join(cwd, path)
  }
}

// webpack配置方法
module.exports = function (env, config) {

}
