---
title: "MyClipApp"
description: "A Windows screen-capture tool with Windows.Graphics.Capture (WGC), ring buffer, FFmpeg encoding, and global hotkey for instant-replay clips"
date: "Oct 28 2026"
repoURL: "https://github.com/Abdulkareemoj/MyClipApp"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1793188249/www/4af2fec9-286d-4d23-9ebc-9b467d001fdd.png"
heroVideo: "https://res.cloudinary.com/dcc1yy1zv/video/upload/v1785155638/www/export-1793188026602_osch5u.mp4"
altText: "MyClipApp Screen Capture Tool"
---

A Windows screen-capture tool built on the Windows.Graphics.Capture (WGC) API with FFmpeg encoding and a global hotkey for instant-replay capture. 
<!--Pick a window, start the ring buffer, then hit the hotkey at any time to flush the last N seconds to a `.mp4` clip.-->

**Features:** Window capture with system/mic audio, configurable ring buffer and FPS, per-window capture overrides, global hotkey, Discord Rich Presence, GPU encoder auto-detection (h264_nvenc/h264_amf/h264_qsv) with libx264 fallback, and a Clips library with thumbnails, search, bulk actions, and playback.

**Built with:** C# .NET 10, Avalonia UI, ShadUI, Vortice, WinRT/Win32 interop, FFmpeg, WASAPI
