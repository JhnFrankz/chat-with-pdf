import { writable } from "svelte/store";

export const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  CHAT_MODE: 2,
  ERROR: -1,
};

export const appStatus = writable(APP_STATUS.CHAT_MODE);
export const appStatusInfo = writable({
  id: "fd257a90c6cf1f2b37ba5007d5a6b1be",
  url: "https://res.cloudinary.com/dd8yzgltf/image/upload/v1716912500/pdf/id3w0zaejmfhhdedi9lw.pdf",
  pages: 4,
});

export const setAppStatusLoading = () => {
  appStatus.set(APP_STATUS.LOADING);
};

export const setAppStatusError = () => {
  appStatus.set(APP_STATUS.ERROR);
};

export const setAppStatusChatMode = ({
  id,
  url,
  pages,
}: {
  id: string;
  url: string;
  pages: number;
}) => {
  appStatus.set(APP_STATUS.CHAT_MODE);
  appStatusInfo.set({ id, url, pages });
};
