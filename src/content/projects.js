//projects start
const projects = [
  {
    name: "mjolnir",
    description:
      "A yara scanner detecting malwares using yara rules",
    stack: ["Python", "yara"],
    sourceCode: "https://github.com/mrtaz77/mjolnir-A-Yara-Scanner",
    img: "https://private-user-images.githubusercontent.com/113765142/345006497-c9ba3b4b-2cc6-48e6-a14b-8a0b75bcffdb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIwNTk1OTUsIm5iZiI6MTcyMjA1OTI5NSwicGF0aCI6Ii8xMTM3NjUxNDIvMzQ1MDA2NDk3LWM5YmEzYjRiLTJjYzYtNDhlNi1hMTRiLThhMGI3NWJjZmZkYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyN1QwNTQ4MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMzFiN2ExZWI4NGUyODhhZGNjMGQxNjA0NDRjNzEwMmZjNTVkYjIzZDJlMDZiN2Q5MWE3N2NmNDdhYTJkZTM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.u1_LS1vwcdu6WSLlwM6Vr6M1fGTF8MbFAfZtOzakc78",
    preview: "#",
  },
  {
    name: "nyShark",
    description:
      "A packet sniffer / network protocol analyzer.",
    stack: ["Python", "scapy"],
    sourceCode: "https://github.com/mrtaz77/nyShark",
    img: "https://private-user-images.githubusercontent.com/113765142/339074494-3fa7f5a0-381d-4dc9-851b-7648708d58c9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIwNTk2NTEsIm5iZiI6MTcyMjA1OTM1MSwicGF0aCI6Ii8xMTM3NjUxNDIvMzM5MDc0NDk0LTNmYTdmNWEwLTM4MWQtNGRjOS04NTFiLTc2NDg3MDhkNThjOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyN1QwNTQ5MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZDg1OWQ0MjA3YmNjMjA2MDc4NDllNDllZDY3NzMyOGVjODFhOTQyNDRhM2U3MzcwZDU1OWJhMWRmOWIyNGZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.hRM0QMeEJsIiOkYAhzrGCdsJ7e0zl1lCvB7VtpgjeWA",
    preview: "#",
  },
  {
    name: "MUCU Micro-controller Project.",
    description:
      "A Smart Automobile featuring bluetooth, voice control, automatic navigation using sonar, camera, gps navigation",
    stack: ["Arduino", "camera", "esp32", "servo-motor", "sonar"],
    sourceCode: "https://github.com/mrtaz77/MUCU-Microcontroller-Project",
    img: "https://private-user-images.githubusercontent.com/113765142/316826347-32e1be06-0070-4abc-9f07-9726cfc7b311.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIwNTk4OTIsIm5iZiI6MTcyMjA1OTU5MiwicGF0aCI6Ii8xMTM3NjUxNDIvMzE2ODI2MzQ3LTMyZTFiZTA2LTAwNzAtNGFiYy05ZjA3LTk3MjZjZmM3YjMxMS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyN1QwNTUzMTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMjkxZjEwNTM5NzgwMzY4MWZjMzE2Y2VjMTFjNjVjNDA4ZDcyOGYyYzk0NmUxMzBiYjJmYWQyYjNjZDk2NzNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.IFNdj_SW7IYNnTKjegPkCE--DyZnjSsSc7uLV2lcjXc",
    preview: "https://www.youtube.com/watch?v=IHWIqOERDno",
  },
];

//projects end
export default projects;
