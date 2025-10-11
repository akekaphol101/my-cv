export const STORAGE_KEYS = {
  PORTFOLIO_DATA: 'portfolio_data',
  THEME: 'portfolio_theme',
  VIEW_MODE: 'portfolio_view_mode',
  FILTERS: 'portfolio_filters',
  LAST_PROJECT: 'portfolio_last_project',
};

export function getStorageItem(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
}

export function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
}

export function removeStorageItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
}
