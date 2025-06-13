import React, { useState } from 'react';
import './App.css';

function App() {
  const installApp = () => {
    const apkUrl = "https://cdarnonprodsacrxnorms.blob.core.windows.net/digital-shopper/VIZIT/849/904/VizIt_6_5_2(386)_UAT.apk?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2050-01-09T01:18:52Z&st=2025-01-30T17:18:52Z&spr=https&sig=r08ITF%2Frqs%2F2QszlZy86HP9Otp%2B581ZpWOIuCJvSPUo%3D&_=1749633094217";

    // Android Intent to launch package installer
    const intentUrl = `intent://${apkUrl}#Intent;action=android.intent.action.VIEW;type=application/vnd.android.package-archive;end;`;

    // Try redirecting using Android intent
    window.location.href = intentUrl;

    // Fallback after short delay if intent fails
    setTimeout(() => {
      window.location.href = apkUrl;
    }, 200);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Install App</h1>
      <button onClick={installApp} style={{ padding: "1rem 2rem", fontSize: "1.2rem" }}>
        Install App
      </button>
    </div>
  );
};

export default App;
