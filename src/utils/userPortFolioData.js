import { useState, useEffect } from 'react';
import { seedData } from './data';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from './localStorage';

export function usePortfolioData() {
  const [data, setData] = useState(() => {
    const stored = getStorageItem(STORAGE_KEYS.PORTFOLIO_DATA, null);
    return stored || seedData;
  });

  useEffect(() => {
    // seed ครั้งแรกถ้าไม่มีใน localStorage
    const stored = getStorageItem(STORAGE_KEYS.PORTFOLIO_DATA, null);
    if (!stored) {
      setStorageItem(STORAGE_KEYS.PORTFOLIO_DATA, seedData);
    }
  }, []);

  const updateData = (newData) => {
    setData(newData);
    setStorageItem(STORAGE_KEYS.PORTFOLIO_DATA, newData);
  };

  const addMessage = (name, email, message) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      message,
      timestamp: Date.now(),
    };

    const updatedData = {
      ...data,
      messages: [...data.messages, newMessage],
    };

    updateData(updatedData);
  };

  return { data, updateData, addMessage };
}
