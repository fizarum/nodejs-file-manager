export const removeExtension = (path, extension) => {
  if (extension && path && path.endsWith(extension)) {
    return path.substring(0, path.length - extension.length);
  } else {
    return path;
  }
};
