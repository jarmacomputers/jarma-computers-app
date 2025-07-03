import type { Category, Issue } from './types';

export const categories: Category[] = [
  {
    slug: 'software',
    name: 'Software',
    description: 'Issues with applications, operating systems, and drivers.',
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    description: 'Problems with physical components like CPUs, GPUs, and RAM.',
  },
  {
    slug: 'firmware',
    name: 'Firmware',
    description: 'BIOS/UEFI settings and firmware update complications.',
  },
  {
    slug: 'networks',
    name: 'Networks',
    description: 'Connectivity issues, Wi-Fi problems, and LAN configurations.',
  },
  {
    slug: 'printers-plotters',
    name: 'Printers & Plotters',
    description: 'Printing errors, driver conflicts, and hardware malfunctions.',
  },
];

export const issues: Issue[] = [
  // Software
  {
    id: 'sw001',
    title: 'Application Fails to Start',
    category: 'software',
    description: 'A specific application closes immediately after being launched or shows an error message and does not open.',
    diagnostics: [
      'Check for Windows/macOS updates.',
      'Look for application-specific error logs in Event Viewer (Windows) or Console (macOS).',
      'Try running the application as an administrator.',
      'Check if antivirus or firewall is blocking the application.',
    ],
    recommendations: [
      'Reinstall the application.',
      'Update graphics drivers.',
      'Ensure .NET Framework / Visual C++ Redistributables are installed and updated (for Windows).',
    ],
    solutions: [
      'A clean reinstallation often resolves conflicts with leftover files from previous versions.',
      'Adding an exception for the application in your security software can resolve blockage issues.',
    ],
  },
  {
    id: 'sw002',
    title: 'Operating System is Slow and Unresponsive',
    category: 'software',
    description: 'The operating system (Windows or macOS) takes a long time to boot, open applications, and perform basic tasks.',
    diagnostics: [
      'Open Task Manager (Ctrl+Shift+Esc) or Activity Monitor to check for resource-heavy processes.',
      'Run a full system scan with an antivirus/anti-malware tool.',
      'Check available disk space on the system drive.',
    ],
    recommendations: [
      'Disable unnecessary startup programs.',
      'Perform a disk cleanup to remove temporary files.',
      'Defragment your hard drive (HDD only) or run TRIM on your SSD.',
      'Consider upgrading RAM if it is consistently maxed out.',
    ],
    solutions: [
      'Limiting startup applications is the most effective way to improve boot times.',
      'Freeing up at least 15-20% of your system drive can significantly improve performance.',
    ],
  },
  // Hardware
  {
    id: 'hw001',
    title: 'Computer Does Not Turn On',
    category: 'hardware',
    description: 'Pressing the power button does nothing. No lights, no fans, no sounds.',
    diagnostics: [
      'Ensure the power cable is securely plugged into both the computer and a working wall outlet.',
      'Check if the power supply unit (PSU) switch is in the ON position.',
      'Test the wall outlet with another device.',
      'If it\'s a laptop, try removing the battery and powering on with only the AC adapter.',
    ],
    recommendations: [
      'Perform a "paperclip test" on the PSU to see if it powers on independently.',
      'Reseat RAM modules and the graphics card.',
      'Check internal power connections to the motherboard.',
    ],
    solutions: [
      'A faulty Power Supply Unit (PSU) is the most common culprit. Replacing it usually solves the problem.',
      'Loose cables or improperly seated components can prevent the system from starting.',
    ],
  },
  // Firmware
  {
    id: 'fw001',
    title: 'System Stuck in BIOS/UEFI Loop',
    category: 'firmware',
    description: 'The computer continuously reboots into the BIOS/UEFI setup screen and cannot load the operating system.',
    diagnostics: [
      'Check the boot order in BIOS/UEFI to ensure the OS drive is listed first.',
      'Verify that the OS drive is detected by the BIOS/UEFI.',
      'Check for any "boot failure" messages.',
    ],
    recommendations: [
      'Reset BIOS/UEFI settings to their default values.',
      'Enable/disable Secure Boot or change boot mode (UEFI/Legacy).',
      'Use a bootable USB with OS installation media to access repair tools.',
    ],
    solutions: [
      'This issue is often caused by a failed or corrupted OS drive, or incorrect boot settings after a hardware change.',
      'Resetting BIOS and running Startup Repair (Windows) or Disk Utility (macOS) can fix bootloader issues.',
    ],
  },
  // Networks
  {
    id: 'net001',
    title: 'Wi-Fi Connects but No Internet Access',
    category: 'networks',
    description: 'The device is connected to the Wi-Fi network, but web pages do not load and internet applications do not work.',
    diagnostics: [
      'Check if other devices on the same network have internet access.',
      'Restart your computer and your router/modem.',
      'Run the Windows Network Troubleshooter or macOS Wireless Diagnostics.',
      'Ping a reliable address like 8.8.8.8 (Google\'s DNS) in the command prompt/terminal.',
    ],
    recommendations: [
      'Flush DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` (macOS).',
      'Reset TCP/IP stack: `netsh int ip reset` (Windows).',
      'Update your network adapter drivers.',
    ],
    solutions: [
      'A simple router and computer restart resolves this issue over 80% of the time.',
      'Incorrect DNS settings are a common cause. Switching to a public DNS like Google (8.8.8.8, 8.8.4.4) or Cloudflare (1.1.1.1) can fix it.',
    ],
  },
  // Printers & Plotters
  {
    id: 'prn001',
    title: 'Printer is Offline or Not Responding',
    category: 'printers-plotters',
    description: 'The computer shows the printer as "Offline" even though it is turned on and connected.',
    diagnostics: [
      'Verify the printer is on and not in an error state (e.g., blinking lights).',
      'Check the USB or network connection.',
      'Ensure the printer is set as the default printer.',
      'Check the print queue for any stuck jobs and clear them.',
    ],
    recommendations: [
      'Restart the Print Spooler service (in services.msc on Windows).',
      'Remove and re-add the printer in your system settings.',
      'Uninstall and reinstall the printer drivers from the manufacturer\'s official website.',
    ],
    solutions: [
      'Clearing a stuck document from the print queue and restarting the Print Spooler service is a very common fix.',
      'For network printers, ensure the printer has a stable IP address and is on the same subnet as the computer.',
    ],
  },
];
