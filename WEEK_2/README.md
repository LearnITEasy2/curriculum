# Week 2: Operating Systems Basics 🖥️
![](./os.png)

This week, we’re diving into Operating Systems (OS)—the software that acts as the middleman between you and your computer’s hardware. By the end of this week, you’ll understand the role of an OS, how to navigate three popular operating systems (Windows, macOS, and Linux), and even get a taste of the command line!

## What Is an Operating System?

An OS is the software that manages your computer’s hardware and software resources. It handles:
* User Interaction: Provides the interface (graphical or command-line) that lets you interact with your computer.
* Resource Management: Allocates CPU, memory, and storage to applications.
* File Management: Organizes files and folders, ensuring they’re accessible when needed.
* Security and Networking: Protects your data and manages connections to other devices or networks.

Without an OS, your computer would just be a box of circuits with no way to communicate with you!

## Navigating Popular Operating Systems

Let’s take a quick look at how to use and navigate the three most widely used operating systems:

1. Windows
* Start Menu: The central hub for launching applications and finding files.
* Taskbar: Shows open programs and system controls like volume and Wi-Fi.
* File Explorer: Use this to navigate drives, folders, and files.
* Key Shortcuts:
  * Ctrl + C to copy, Ctrl + V to paste.
  * Alt + Tab to switch between programs.

2. macOS
* Finder: Similar to Windows’ File Explorer, Finder helps you manage files and folders.
* Dock: The strip at the bottom of the screen for launching apps.
* Mission Control: Swipe up with three fingers on the trackpad or press F3 to see all open windows.
* Key Shortcuts:
  * Cmd + C to copy, Cmd + V to paste.
  * Cmd + Space to open Spotlight search.

3. Linux
* Desktop Environments: Linux comes in different “flavors” like Ubuntu or Fedora, each with unique interfaces (GNOME, KDE, etc.).
* File Manager: Similar to Finder or File Explorer for navigating files.
* Terminal: More central in Linux, used for executing commands (we’ll touch on this shortly).

Tip: Try navigating each OS on your own computer or a virtual machine if you’re curious about one you don’t use!

## Introduction to the Command Line

The Command Line Interface (CLI) is a text-based way to interact with your computer. It can look intimidating, but it’s powerful for managing files, running programs, and even debugging.

### Basic Commands to Get Started:

1. Windows:
Open Command Prompt (search “cmd” in the Start menu).
* dir: Lists files in a directory.
* cd folder_name: Changes the current directory.
* mkdir folder_name: Creates a new folder.
2. macOS/Linux:
Open the Terminal app.
* ls: Lists files in a directory.
* cd folder_name: Changes the current directory.
* mkdir folder_name: Creates a new folder.

Why Learn the Command Line?

The command line gives you more control over your computer and lets you automate tasks, troubleshoot problems, and access systems remotely. It’s an essential skill for IT professionals.

### What Is WSL in Windows?

The Windows Subsystem for Linux (WSL) is a feature in Windows that allows you to run a Linux environment, including command-line tools, directly on your Windows machine—without the need for a virtual machine or dual boot setup.

#### Why Is WSL There?
Microsoft introduced WSL to make Windows more developer-friendly, especially for IT professionals and software engineers who rely on Linux tools. With WSL, you can:
	•	Use Linux commands alongside Windows tools.
	•	Develop and test Linux-based software directly on Windows.
	•	Avoid the complexity of setting up a full Linux system.

#### How to Enable WSL

Enabling WSL is simple and takes just a few steps:
1. Open PowerShell as Administrator: Right-click the Start menu and select Windows PowerShell (Admin).
2. Install WSL:
Run the following command: `wsl --install`. This command installs the latest version of WSL and sets up Ubuntu as the default Linux distribution.   
1. Restart Your Computer:
After installation, restart your PC when prompted.
1. Launch WSL:
Open a terminal (e.g., Command Prompt, PowerShell, or Windows Terminal) and type wsl to launch your Linux environment.

#### Why Use WSL?

1. Access Powerful Linux Tools:
With WSL, you can use Linux-specific tools like grep, sed, and awk, or even install development tools like Python, Git, or Node.js.

2. Seamless Integration with Windows:
You can access your Windows files directly from Linux (/mnt/c for your C: drive) and even mix commands from both environments in one terminal.

3. Perfect for Learning Linux:
If you’re new to Linux, WSL is an easy way to get started without installing a separate operating system.

4. Saves Resources:
Unlike virtual machines, WSL uses fewer resources, meaning you can run Linux and Windows simultaneously without slowing down your computer.

5. Ideal for Developers and IT Pros:
Whether you’re writing code, working on servers, or learning about system administration, WSL lets you practice Linux skills without leaving your Windows environment.

Try setting up WSL this week and exploring basic Linux commands in a real Linux environment! It’s a great step toward mastering both Windows and Linux systems.

## Your Task This Week
1.	Open the file manager on your computer and explore how files and folders are organized.
2.	Open the command line or terminal and practice the basic commands above.
3.	Compare the interfaces of at least two operating systems (e.g., Windows and macOS, or Windows and Linux).

Links:
- [Что такое подсистема Windows для Linux](https://learn.microsoft.com/ru-ru/windows/wsl/about)
- [Операционная система](https://blog.skillfactory.ru/glossary/operaczionnaya-sistema/)
- [Командная строка. Что такое командная строка и как она используется в системах Dell](https://www.dell.com/support/kbdoc/ru-az/000130703/%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0-%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0-%D0%B8-%D0%BA%D0%B0%D0%BA-%D0%BE%D0%BD%D0%B0-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B5%D1%82%D1%81%D1%8F-%D0%B2-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%D1%85-dell)
- [КОМАНДНАЯ СТРОКА ДЛЯ САМЫХ МАЛЕНЬКИХ](https://www.youtube.com/watch?v=LtZpdRJvU1A&ab_channel=AlekOS)

Next week, we’ll step into the world of Networking Fundamentals to learn how computers connect and communicate. Until then, happy exploring! 🚀