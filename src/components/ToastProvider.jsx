import * as Toast from "@radix-ui/react-toast";
import { createContext, useState, useCallback } from "react";
import { X } from "lucide-react";

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    ({ title, description, type = "default" }) => {
      const id = Date.now();
      const newToast = { id, title, description, type };
      setToasts((prev) => [...prev, newToast]);

      // Auto remove after 5 seconds
      setTimeout(() => {
        removeToast(id);
      }, 5000);

      return id;
    },
    []
  );

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <Toast.Provider swipeDirection="right">
        {children}
        <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col gap-2 p-4 w-full max-w-sm z-50" />
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            className="bg-slate-900 text-white p-4 rounded-md shadow-lg flex justify-between items-center data-[state=open]:animate-in data-[state=closed]:animate-out"
          >
            <div>
              <Toast.Title className="font-semibold">{toast.title}</Toast.Title>
              {toast.description && (
                <Toast.Description className="text-sm opacity-80">
                  {toast.description}
                </Toast.Description>
              )}
            </div>
            <Toast.Close asChild>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 text-white hover:opacity-70 transition-opacity"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </Toast.Close>
          </Toast.Root>
        ))}
      </Toast.Provider>
    </ToastContext.Provider>
  );
};
