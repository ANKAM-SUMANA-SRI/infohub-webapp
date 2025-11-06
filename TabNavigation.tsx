import { useState } from 'react';
import TabNavigation from '../TabNavigation';

export default function TabNavigationExample() {
  const [activeTab, setActiveTab] = useState<'weather' | 'currency' | 'quotes'>('weather');

  return (
    <TabNavigation 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
    />
  );
}
