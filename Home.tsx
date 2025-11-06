import { useState } from "react";
import TabNavigation from "@/components/TabNavigation";
import WeatherModule from "@/components/WeatherModule";
import CurrencyConverter from "@/components/CurrencyConverter";
import QuoteGenerator from "@/components/QuoteGenerator";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'weather' | 'currency' | 'quotes'>('weather');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-1" data-testid="text-app-title">
              InfoHub
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-app-tagline">
              Your Daily Utilities Hub
            </p>
          </div>
        </div>
      </header>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="animate-in fade-in duration-200">
          {activeTab === 'weather' && <WeatherModule />}
          {activeTab === 'currency' && <CurrencyConverter />}
          {activeTab === 'quotes' && <QuoteGenerator />}
        </div>
      </main>

      <footer className="mt-12 py-6 border-t bg-card">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            Built with ❤️ by ByteXL · Making engineering learning practical and connected
          </p>
        </div>
      </footer>
    </div>
  );
}
