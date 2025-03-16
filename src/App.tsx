import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex justify-center gap-12 mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-eth-blue to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <a href="https://ethereum.org" target="_blank" className="relative flex items-center justify-center w-32 h-32 bg-black rounded-lg hover:scale-105 transition-transform">
              <span className="text-6xl">Ξ</span>
            </a>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-eth-blue rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative flex items-center justify-center w-32 h-32 bg-black rounded-lg">
              <span className="text-4xl font-bold">GZ</span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-eth-blue to-purple-600 text-transparent bg-clip-text">
          ETH Guangzhou Hackathon
        </h1>
        <h2 className="text-3xl font-medium mb-6 text-center text-gray-300">
          2025 以太坊广州黑客松
        </h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          用代码构建未来，在广州遇见以太坊的无限可能
        </p>
        <div className="flex flex-col items-center space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-eth-blue">奖项设置</h3>
              <p className="text-gray-300">丰厚奖金池，包括技术创新奖、最佳应用奖和生态贡献奖</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-eth-blue">导师指导</h3>
              <p className="text-gray-300">行业专家一对一指导，助力项目技术突破和落地</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-eth-blue">赛道主题</h3>
              <p className="text-gray-300">Layer2 创新、DeFi 应用、Web3 社交、NFT 艺术与游戏</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-eth-blue">项目孵化</h3>
              <p className="text-gray-300">优秀项目有机会获得投资机构关注和孵化支持</p>
            </div>
          </div>
          <div className="w-full bg-gray-800 p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-eth-blue">活动日程</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 text-gray-400">3月20日</div>
                <div className="flex-1 text-gray-300">项目报名开始</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-gray-400">4月15日</div>
                <div className="flex-1 text-gray-300">黑客松正式开始</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-gray-400">4月17日</div>
                <div className="flex-1 text-gray-300">项目展示 & 评选</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-gray-400">4月18日</div>
                <div className="flex-1 text-gray-300">颁奖仪式</div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="px-8 py-4 text-lg bg-eth-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            立即报名 ({count} 人已报名)
          </button>
        </div>
        <p className="mt-12 text-center text-gray-400">
          共建广州以太坊生态，成就下一个区块链独角兽
        </p>
      </div>
    </div>
  )
}

export default App
