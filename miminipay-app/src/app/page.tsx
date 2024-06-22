export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-yellow-50">
      <header className="w-full bg-yellow-300 p-8 shadow-lg">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          My Crypto Dashboard
        </h1>
      </header>

      <section className="mt-12 flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg w-full text-center">
          <h2 className="text-3xl font-semibold text-gray-700">Portfolio Summary</h2>
          <p className="mt-4 text-6xl font-bold text-gray-900">2.567 BTC</p>
          <p className="mt-2 text-xl text-gray-600">~ $75,000 USD</p>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 w-full max-w-4xl">
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Recent Transactions</h2>
          <ul className="mt-4 text-left text-gray-600">
            <li className="mb-2">-0.234 BTC to <span className="font-bold">1A2b3C4d</span></li>
            <li className="mb-2">+0.567 BTC from <span className="font-bold">5D6e7F8g</span></li>
            <li className="mb-2">-0.100 BTC to <span className="font-bold">9H0i1J2k</span></li>
          </ul>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Send Cryptocurrency</h2>
          <form className="mt-4 flex flex-col items-center">
            <label className="w-full text-left text-sm text-gray-600 mb-2" htmlFor="address">
              Recipient Address
            </label>
            <input
              className="input-field w-full mb-4"
              type="text"
              id="address"
              placeholder="Enter recipient address"
            />
            <label className="w-full text-left text-sm text-gray-600 mb-2" htmlFor="amount">
              Amount (BTC)
            </label>
            <input
              className="input-field w-full mb-4"
              type="number"
              id="amount"
              placeholder="Enter amount"
            />
            <button
              type="submit"
              className="submit-button w-full"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="mt-16 w-full bg-yellow-300 p-4 text-center">
        <p className="text-gray-800">© 2024 My Crypto Dashboard</p>
      </footer>
    </main>
  );
}
