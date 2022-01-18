const defaultImg =
  "https://img1.baidu.com/it/u=3503576644,3643839059&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
export default function () {
  // <style jsx>

  // </style>
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex-1">
        <div
          className="text-lg font-bold line-clamp-2"        
        >
          这是一个大新闻哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </div>
        <div className="text-sm text-gray-400 ">时间从现在开始</div>
      </div>
      <img src={defaultImg} className="w-32 h-24 rounded-md"></img>
    </div>
  )
}
