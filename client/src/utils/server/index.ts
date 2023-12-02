const serverUrl = import.meta.env.VITE_MODE === 'development' ? import.meta.env.VITE_LOCAL_SERVER_URL
: import.meta.env.VITE_LIVE_SERVER_URL

export default serverUrl