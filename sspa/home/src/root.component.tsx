import { useEffect, useState } from "react";

import getProfile from "@api/getProfile";

interface Profile {
  avatar: string;
  fullName: string;
  place: string;
}

export default function Root(props) {
  const [info, setInfo] = useState<Profile>();

  useEffect(() => {
    getProfile().then((profile) => setInfo(profile));
  }, []);

  return (
    <section
      style={{
        padding: "1rem",
        backgroundColor: "cyan",
        color: "#023684",
      }}
    >
      The section in a cyan background color is mounted as a React{" "}
      <a
        href="https://single-spa.js.org/docs/module-types#parcels"
        target="_blank"
        rel="noopener noreferrer"
      >
        app-parcel
      </a>{" "}
      named <i>{props.name}</i>
      {info && (
        <p
          style={{
            backgroundColor: "white",
            padding: "inherit",
          }}
        >
          The paragraph in a white background color, fetches the data from an{" "}
          <a
            href="https://single-spa.js.org/docs/module-types/#utilities"
            target="_blank"
            rel="noopener noreferrer"
          >
            utility module
          </a>{" "}
          named <i>@api/getProfile</i>
          <pre>{JSON.stringify(info, null, "\t")}</pre>
        </p>
      )}
    </section>
  );
}
