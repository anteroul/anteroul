function getGPUInfo() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown';
    }
    return 'Unknown';
}

import React, { useState, useEffect } from 'react';

const BootSequence = () => {
  const [hardwareInfo, setHardwareInfo] = useState({
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    cpuCores: navigator.hardwareConcurrency || 'Unknown',
    deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown',
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    colorDepth: `${window.screen.colorDepth} bits`,
    gpuInfo: getGPUInfo(),
  });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      cpuCores: navigator.hardwareConcurrency || 'Unknown',
      deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown',
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      colorDepth: `${window.screen.colorDepth} bits`,
      gpuInfo: getGPUInfo(),
    };
    setHardwareInfo(info);
  }, []);

  return (
    <div style={styles.container}>
      <h1>System Hardware Information</h1>
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <label>User Agent:</label>
          <span>{hardwareInfo.userAgent}</span>
        </div>
        <div style={styles.infoItem}>
          <label>Platform:</label>
          <span>{hardwareInfo.platform}</span>
        </div>
        <div style={styles.infoItem}>
          <label>CPU Cores:</label>
          <span>{hardwareInfo.cpuCores}</span>
        </div>
        <div style={styles.infoItem}>
          <label>Device Memory:</label>
          <span>{hardwareInfo.deviceMemory}</span>
        </div>
        <div style={styles.infoItem}>
          <label>GPU Info:</label>
          <span>{hardwareInfo.gpuInfo}</span>
        </div>
      </div>
    </div>
  );
};