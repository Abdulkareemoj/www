---
title: 'Using WSA with Flutter for Android Development'
publishDate: '2024-03-02'

description: 'Windows Subsystem for Android (WSA) provides a seamless environment for running Android apps directly on Windows.'
tags: ['test']
---

When it comes to Android development, emulators have long been the go-to choice for testing and debugging applications. Whether with native applications or Hybrid apps, however with the advent of Windows Subsystem for Android (WSA), developers now have a decent alternative at their disposal. WSA provides a seamless environment for running Android apps directly on Windows, offering a more efficient and integrated development experience. In this article, we'll explore how to leverage WSA with Flutter for Android development, highlighting its benefits and providing a step-by-step guide to get started.

## <a name="Headings"></a>Why WSA with Flutter?

Seamless Integration: WSA integrates seamlessly with Windows, allowing developers to run Android apps directly within their development environment without the need for external emulators.

- Performance: WSA offers improved performance compared to traditional emulators, leveraging the underlying Windows system resources efficiently.
- Debugging Capabilities: With WSA, developers can easily debug their Flutter applications using familiar tools like Android Studio or Visual Studio Code.
- Compatibility: WSA supports a wide range of Android APIs and features, ensuring compatibility with various Flutter plugins and packages.
- Simplified Setup: Setting up WSA for Flutter development is straightforward and requires minimal configuration, making it accessible to developers of all skill levels.

## Getting Started with WSA and Flutter:

### Prerequisites:

- Windows 11 installed on your system.
- Windows Subsystem for Android enabled.
- Flutter SDK installed on your machine.
- A Text Editor or IDE for Flutter development (e.g., Visual Studio Code, Android Studio).

#### Windows 11 install

Im going to assume you have Windows 11 installed on your system. If not, you can follow the official guide to install Windows 11 on your machine. WSA require Windows 11 or later to run, so make sure your system meets the minimum requirements, although there are ways to get it on Windows 10, it's not officially supported.

But just in case you want to try it out on Windows 10, you can follow [this guide](https://github.com/MustardChef/WSABuilds). It also applies for Windows 11 users who cannot install WSA due to regional restrictions, you just dont want to use the amazon appstore method.

#### Enable Windows Subsystem for Android

Open Settings on your Windows machine.
Navigate to Apps > Apps & features > Optional features.
Click on "Add a feature" and select "Windows Subsystem for Android" from the list.
Follow the on-screen instructions to complete the installation.

#### Install Flutter

Download and install the Flutter SDK from the official website (https://flutter.dev/docs/get-started/install).
Add Flutter to your system path to access it from the command line.
Create a New Flutter Project:

Open your preferred terminal or command prompt.
Run the following command to create a new Flutter project:

```bash
flutter create my_flutter_app
## Navigate to the newly created project directory
cd my_flutter_app

```

#### Installing A Text Editor or IDE for Flutter development

There's two popular options for this, you can either use Visual Studio Code or Android Studio. Both are great options, but Visual Studio Code is more lightweight and easier to set up, while Android Studio is more integrated and tailored specifically for Android development.

#### Option 1: Visual Studio Code

1. Download and install Visual Studio Code:

- Download the official installer at he Visual Studio Code website [here](https://code.visualstudio.com/).
- Click on the "Download for Windows" button to download the installer.

- Once the download is complete, locate the downloaded installer file (usually named something like VSCodeSetup.exe) in your downloads folder.
  Double-click on the installer file to begin the installation process.
  Follow the on-screen instructions provided by the installer.
  Choose the destination folder for the installation and any additional options as per your preference.
  Click `"Install"` to begin the installation process.
  After the installation is complete, you can launch Visual Studio Code by double-clicking its icon on the desktop or by searching for "Visual Studio Code" in the Start menu.

2. Install Flutter and Dart Extensions:

- Once Visual Studio Code is open, navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
  In the search bar, type `"Flutter"` and press Enter.
  Look for the `"Flutter"` extension authored by the Flutter team and click on the `"Install"` button next to it. This extension provides Flutter-specific functionalities within Visual Studio Code.
  Similarly, search for `"Dart"` in the Extensions view and install the `"Dart"` extension, which provides support for the Dart programming language used in Flutter development.

3. Configure Flutter SDK Path:

- After installing the Flutter extension, you'll need to specify the path to your Flutter SDK.
  Open the Command Palette by pressing `Ctrl+Shift+P (Windows)` or `Cmd+Shift+P (Mac)`.
  Type "Flutter: Select Flutter SDK" and press Enter.
  Navigate to the folder where you have installed Flutter and select the Flutter SDK directory.
  Click `"OK"` to save the Flutter SDK path.

4. Verify Installation:

- To verify that Flutter and Dart extensions are installed correctly, open a new terminal within Visual Studio Code by pressing `Ctrl+Shift+` (backtick)`.
Type flutter `--version`and press Enter to check the Flutter installation.
Similarly, type`dart --version` and press Enter to verify the Dart installation.
  Once you've completed these steps, Visual Studio Code is set up for Flutter development, and you can start creating Flutter projects, writing code, and building apps directly within the IDE.

#### Option 2: Android Studio

1. Download Android Studio:

- Visit the official Android Studio website [here](https://developer.android.com/studio).
- Click on the "Download Android Studio" button.

2. Install Android Studio:

- Once the download is complete, locate the downloaded installer file.
  Double-click on the installer file to start the installation process.
  Follow the on-screen instructions provided by the installer.
  Choose the installation options and components you want to install. Make sure to include Flutter and Dart plugins during installation by checking the respective boxes.
  Select the installation location on your system.
  Click `"Install"` to begin the installation process.

- After the installation is complete, launch Android Studio by double-clicking its icon on the desktop or by searching for "Android Studio" in the Start menu.

3. Set up Flutter Plugin:

- Once Android Studio is open, go to `"Configure"` in the top menu, and select `"Plugins"`.
  In the Plugins window, click on the `"Marketplace"` tab.
  Search for "Flutter" in the Marketplace search bar.
  Click on the `"Install"` button next to the "Flutter" plugin.
  Follow any additional instructions to complete the installation.
  Restart Android Studio to activate the Flutter plugin.

4. Set up Flutter SDK Path:

- After installing the Flutter plugin, you need to specify the Flutter SDK path in Android Studio.
  Go to "File" > `"Settings" `(or `"Android Studio"` > `"Preferences"` on macOS).
  In the Settings/Preferences dialog, navigate to `"Languages & Frameworks"` > `"Flutter"`.
  Click on the `"Flutter SDK path"` field and browse to the directory where you installed Flutter.
  Click "Apply" and then `"OK"` to save the settings.

5. Verify Installation:

- To verify that Android Studio is set up correctly for Flutter development, open a new terminal within Android Studio.
  Type `flutter --version` and press Enter to check the Flutter installation.
  Similarly, type `dart --version` and press Enter to verify the Dart installation.
  Once you've completed these steps, Android Studio is ready for Flutter development, and you can start creating Flutter projects, writing code, and building apps directly within the IDE.

[[Top]](#top)
