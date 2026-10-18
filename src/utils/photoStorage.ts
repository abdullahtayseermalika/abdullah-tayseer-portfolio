/**
 * photoStorage.ts
 * Browser-side IndexedDB persistence for Abdullah Tayseer's Hero portrait.
 * Keeps user-uploaded photos across browser refreshes without uploading to external servers.
 */

const DB_NAME = 'AbdullahTayseerPortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'user_assets';
const PORTRAIT_KEY = 'hero_portrait';

interface StoredPhotoRecord {
  id: string;
  dataUrl: string;
  mimeType: string;
  fileName: string;
  fileSize: number;
  updatedAt: number;
}

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment.'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error || new Error('Failed to open IndexedDB.'));
    };
  });
}

/**
 * Save portrait image data to IndexedDB with localStorage fallback.
 */
export async function savePortraitPhoto(
  dataUrl: string,
  fileName: string,
  mimeType: string,
  fileSize: number
): Promise<void> {
  const record: StoredPhotoRecord = {
    id: PORTRAIT_KEY,
    dataUrl,
    mimeType,
    fileName,
    fileSize,
    updatedAt: Date.now(),
  };

  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const putRequest = store.put(record);

      putRequest.onsuccess = () => resolve();
      putRequest.onerror = () => reject(putRequest.error);
    });
  } catch (err) {
    console.warn('IndexedDB failed to save photo, attempting localStorage fallback:', err);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(PORTRAIT_KEY, JSON.stringify(record));
      }
    } catch (fallbackErr) {
      console.warn('localStorage fallback also failed:', fallbackErr);
    }
  }
}

/**
 * Retrieve saved portrait image data from IndexedDB with localStorage fallback.
 */
export async function getStoredPortraitPhoto(): Promise<StoredPhotoRecord | null> {
  try {
    const db = await openDatabase();
    const result = await new Promise<StoredPhotoRecord | null>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const getRequest = store.get(PORTRAIT_KEY);

      getRequest.onsuccess = () => {
        resolve((getRequest.result as StoredPhotoRecord) || null);
      };
      getRequest.onerror = () => reject(getRequest.error);
    });

    if (result) return result;
  } catch (err) {
    console.warn('IndexedDB failed to retrieve photo, attempting localStorage fallback:', err);
  }

  // Fallback to localStorage
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem(PORTRAIT_KEY);
      if (raw) {
        return JSON.parse(raw) as StoredPhotoRecord;
      }
    }
  } catch (fallbackErr) {
    console.warn('localStorage fallback read error:', fallbackErr);
  }

  return null;
}

/**
 * Clear saved portrait photo from IndexedDB and localStorage.
 */
export async function clearPortraitPhoto(): Promise<void> {
  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const deleteRequest = store.delete(PORTRAIT_KEY);

      deleteRequest.onsuccess = () => resolve();
      deleteRequest.onerror = () => reject(deleteRequest.error);
    });
  } catch (err) {
    console.warn('IndexedDB delete error:', err);
  }

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(PORTRAIT_KEY);
    }
  } catch (fallbackErr) {
    console.warn('localStorage remove error:', fallbackErr);
  }
}
