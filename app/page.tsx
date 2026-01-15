'use client'

import { useState } from 'react'
import {
  TrendingUp,
  Search,
  BarChart3,
  FileText,
  Calculator,
  AlertCircle,
  ChevronRight,
  DollarSign,
  Users,
  Activity
} from 'lucide-react'

interface ETF {
  symbol: string
  name: string
  price: number
  change: number
  nav: number
  aum: string
  expenseRatio: number
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your ETF Administration Agent. I can help you with ETF analysis, portfolio management, compliance monitoring, NAV calculations, expense tracking, and more. How can I assist you today?'
    }
  ])
  const [input, setInput] = useState('')
  const [selectedTab, setSelectedTab] = useState('chat')

  const sampleETFs: ETF[] = [
    { symbol: 'SPY', name: 'SPDR S&P 500 ETF', price: 465.32, change: 0.85, nav: 465.28, aum: '$420B', expenseRatio: 0.09 },
    { symbol: 'QQQ', name: 'Invesco QQQ Trust', price: 398.45, change: 1.23, nav: 398.41, aum: '$215B', expenseRatio: 0.20 },
    { symbol: 'VTI', name: 'Vanguard Total Stock Market', price: 242.18, change: 0.67, nav: 242.15, aum: '$340B', expenseRatio: 0.03 },
    { symbol: 'IWM', name: 'iShares Russell 2000', price: 198.76, change: -0.42, nav: 198.73, aum: '$65B', expenseRatio: 0.19 },
  ]

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(input)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    }, 500)

    setInput('')
  }

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes('nav') || lowerQuery.includes('net asset')) {
      return `I can help you calculate NAV. The Net Asset Value formula is:\n\nNAV = (Total Assets - Total Liabilities) / Outstanding Shares\n\nFor daily NAV calculations, I track:\n• Market value of all portfolio holdings\n• Accrued expenses and income\n• Outstanding shares count\n• Corporate actions and dividends\n\nWould you like me to calculate NAV for a specific ETF or set up automated daily NAV monitoring?`
    }

    if (lowerQuery.includes('compliance') || lowerQuery.includes('regulation')) {
      return `I monitor ETF compliance across multiple areas:\n\n✓ Investment Company Act of 1940 requirements\n✓ Diversification tests (75-5-10 rule)\n✓ Concentration limits per issuer\n✓ Liquidity requirements (Rule 22e-4)\n✓ Tracking error vs benchmark\n✓ Tax compliance (RIC requirements)\n\nI can generate compliance reports, flag potential violations, and track remediation deadlines. Which compliance area would you like to review?`
    }

    if (lowerQuery.includes('expense') || lowerQuery.includes('fee')) {
      return `ETF Expense Analysis:\n\nI track all fund expenses including:\n• Management fees\n• Administrative costs\n• Custodian fees\n• Legal and audit expenses\n• Distribution fees\n• Trading costs\n\nI can calculate the total expense ratio, compare against benchmarks, forecast annual expenses, and identify cost optimization opportunities. Would you like a detailed expense breakdown?`
    }

    if (lowerQuery.includes('rebalance') || lowerQuery.includes('portfolio')) {
      return `Portfolio Rebalancing Support:\n\nI can assist with:\n• Calculating optimal trade orders to match target weights\n• Minimizing tracking error\n• Tax-loss harvesting opportunities\n• Transaction cost analysis\n• Creation/redemption basket optimization\n• Corporate action processing\n\nWhich ETF portfolio would you like to rebalance?`
    }

    if (lowerQuery.includes('report') || lowerQuery.includes('document')) {
      return `I can generate various administrative documents:\n\n📄 Daily NAV reports\n📄 Holdings disclosure (Form N-PORT)\n📄 Shareholder reports (N-CSR)\n📄 Prospectus updates\n📄 SAI amendments\n📄 Tax reporting (1099s)\n📄 Performance attribution reports\n📄 Compliance certifications\n\nWhich document do you need to generate?`
    }

    if (lowerQuery.includes('tracking error') || lowerQuery.includes('performance')) {
      return `Performance & Tracking Analysis:\n\nI monitor:\n• Daily tracking difference vs benchmark\n• Tracking error (standard deviation)\n• Performance attribution by sector/security\n• Creation/redemption impact\n• Expense drag analysis\n• Tax drag impact\n\nCurrent tracking metrics for your ETFs:\n• SPY: 0.02% tracking error (excellent)\n• QQQ: 0.05% tracking error (good)\n• VTI: 0.01% tracking error (excellent)\n\nWould you like a detailed performance breakdown?`
    }

    if (lowerQuery.includes('creation') || lowerQuery.includes('redemption')) {
      return `Creation/Redemption Management:\n\nI handle:\n• Basket composition and optimization\n• AP notification and communication\n• Cash component calculations\n• Trade execution monitoring\n• Settlement tracking\n• Impact on NAV and tracking\n\nToday's activity:\n• 5 creation orders (125,000 shares)\n• 2 redemption orders (50,000 shares)\n• Net inflows: $8.2M\n\nNeed help with basket optimization or AP communications?`
    }

    return `I understand you're asking about "${query}". As your ETF Administration Agent, I can help with:\n\n• NAV calculations and daily pricing\n• Compliance monitoring and reporting\n• Expense tracking and analysis\n• Portfolio rebalancing and optimization\n• Performance and tracking error analysis\n• Creation/redemption processing\n• Regulatory filings and documentation\n• Tax reporting and distributions\n• Shareholder services\n\nCould you provide more details about what you need assistance with?`
  }

  const quickActions = [
    { icon: Calculator, label: 'Calculate NAV', query: 'Calculate NAV for my ETF' },
    { icon: FileText, label: 'Generate Report', query: 'Generate compliance report' },
    { icon: BarChart3, label: 'Analyze Performance', query: 'Analyze tracking error and performance' },
    { icon: AlertCircle, label: 'Check Compliance', query: 'Check compliance status' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ETF Administration Agent</h1>
                <p className="text-sm text-gray-600">AI-Powered Fund Management Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs text-gray-500">Total AUM</p>
                <p className="text-lg font-bold text-gray-900">$1.04T</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setSelectedTab('chat')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedTab === 'chat'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            Agent Chat
          </button>
          <button
            onClick={() => setSelectedTab('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedTab === 'dashboard'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            Dashboard
          </button>
        </div>

        {selectedTab === 'chat' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chat Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[600px]">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message, idx) => (
                    <div
                      key={idx}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="whitespace-pre-line">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about NAV, compliance, expenses, reports..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSend}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInput(action.query)
                        setTimeout(() => handleSend(), 100)
                      }}
                      className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <action.icon size={20} className="text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">{action.label}</span>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="text-green-600" size={20} />
                      <span className="text-sm text-gray-600">NAV Updates</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">4/4 ✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="text-blue-600" size={20} />
                      <span className="text-sm text-gray-600">Creations/Redemptions</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">7 orders</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="text-amber-600" size={20} />
                      <span className="text-sm text-gray-600">Compliance Alerts</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">0 issues</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="text-purple-600" size={20} />
                      <span className="text-sm text-gray-600">Net Flows</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">+$8.2M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Dashboard View */
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total ETFs</p>
                    <p className="text-2xl font-bold text-gray-900">4</p>
                  </div>
                  <BarChart3 className="text-blue-600" size={32} />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total AUM</p>
                    <p className="text-2xl font-bold text-gray-900">$1.04T</p>
                  </div>
                  <DollarSign className="text-green-600" size={32} />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Tracking Error</p>
                    <p className="text-2xl font-bold text-gray-900">0.03%</p>
                  </div>
                  <Activity className="text-purple-600" size={32} />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Compliance Status</p>
                    <p className="text-2xl font-bold text-green-600">100%</p>
                  </div>
                  <AlertCircle className="text-green-600" size={32} />
                </div>
              </div>
            </div>

            {/* ETF Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">ETF Portfolio</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAV</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AUM</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sampleETFs.map((etf, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-bold text-blue-600">{etf.symbol}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{etf.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${etf.price.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-medium ${etf.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {etf.change >= 0 ? '+' : ''}{etf.change.toFixed(2)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${etf.nav.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{etf.aum}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{etf.expenseRatio}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Admin Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Activity size={16} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">NAV calculated for all ETFs</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FileText size={16} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Daily holdings report generated</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Users size={16} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Creation order processed - SPY (25,000 shares)</p>
                      <p className="text-xs text-gray-500">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <AlertCircle size={20} className="text-amber-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Form N-PORT filing due</p>
                      <p className="text-xs text-gray-500">Due in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <FileText size={20} className="text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Quarterly shareholder report</p>
                      <p className="text-xs text-gray-500">Due in 12 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <BarChart3 size={20} className="text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Monthly performance review</p>
                      <p className="text-xs text-gray-500">Due in 15 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
