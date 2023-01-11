// Anything exported from this file is importable by other in-browser modules.

const apiCache = new Map();

export default function getProfile(userName: string) {
  const cachedProfile = apiCache.get("profile");

  return new Promise((resolve, reject) => {
    if (cachedProfile) return resolve(cachedProfile);

    return fetch(`https://api.github.com/users/${userName || "joeldenning"}`)
      .then((res) => {
        if (!res.ok) {
          const warning = `${res.statusText} (${res.status})`;
          alert(warning);

          return reject(warning);
        }

        return res.json();
      })
      .then((gitHubProfile) => {
        if (gitHubProfile) {
          const cleanProfile = {
            avatar: gitHubProfile.avatar_url,
            fullName: gitHubProfile.name,
            place: gitHubProfile.location,
          };

          apiCache.set("profile", cleanProfile);
          resolve(cleanProfile);
        }
      })
      .catch((e) => alert(e.message));
  });
}
