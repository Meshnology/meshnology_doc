"use strict";
(globalThis["webpackChunkrdk_doc"] = globalThis["webpackChunkrdk_doc"] || []).push([[226],{

/***/ 73886
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = 'W10(LoRa AIOT Dev Kit)';
const metadata = {
  "id": "W10/W10_LoRa_AIOT_Dev_Kit",
  "title": "W10(LoRa AIOT Dev Kit)",
  "description": "Product display image：",
  "source": "@site/docs/07_W10/01_W10_LoRa_AIOT_Dev_Kit.md",
  "sourceDirName": "07_W10",
  "slug": "/W10/W10_LoRa_AIOT_Dev_Kit",
  "permalink": "/W10/W10_LoRa_AIOT_Dev_Kit",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {},
  "sidebar": "tutorialSidebar",
  "previous": {
    "title": "N39 WiFi LoRa 32 V4 Development Kit",
    "permalink": "/N39/Meshnology N39"
  },
  "next": {
    "title": "W11（ESP32S3 Mini Module）",
    "permalink": "/W11/W11_ESP32S3_Mini_Module"
  }
};
const assets = {

};



const toc = [{
  "value": "Product Introduction",
  "id": "productintroduction",
  "level": 2
}, {
  "value": "Product Features",
  "id": "productfeatures",
  "level": 3
}, {
  "value": "Technical Specifications",
  "id": "technicalspecifications",
  "level": 3
}, {
  "value": "Hardware specifications",
  "id": "hardwarespecifications",
  "level": 4
}, {
  "value": "Hardware Manual",
  "id": "hardwaremanual",
  "level": 4
}, {
  "value": "Hardware interface",
  "id": "hardwareinterface",
  "level": 4
}, {
  "value": "Product dimensions",
  "id": "productdimensions",
  "level": 3
}, {
  "value": "Instructions for Use",
  "id": "instructionsforuse",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 2
}, {
  "value": "Weighing Scale",
  "id": "weighing-scale",
  "level": 3
}, {
  "value": "Step_counting",
  "id": "step_counting",
  "level": 3
}, {
  "value": "Temperature and Humidity",
  "id": "temperature-and-humidity",
  "level": 3
}, {
  "value": "Communication Features",
  "id": "communication-features",
  "level": 3
}, {
  "value": "Xiaozhi AI Application",
  "id": "xiaozhiaiapplication",
  "level": 2
}, {
  "value": "Firmware flashing",
  "id": "firmwareflashing",
  "level": 3
}, {
  "value": "flash_download_tool ",
  "id": "flash_download_tool",
  "level": 4
}, {
  "value": "Basic Usage",
  "id": "basicusage",
  "level": 3
}, {
  "value": "Start the network configuration",
  "id": "startthenetworkconfiguration",
  "level": 4
}, {
  "value": "Add new device to the management backend",
  "id": "addnewdevicetothemanagementbackend",
  "level": 4
}, {
  "value": "Xiaozhi&#39;s additional learning links",
  "id": "xiaozhisadditionallearninglinks",
  "level": 3
}, {
  "value": "Arduino development",
  "id": "arduinodevelopment",
  "level": 2
}, {
  "value": "Environment setup",
  "id": "environmentsetup",
  "level": 3
}, {
  "value": "Download and install Arduino IDE",
  "id": "downloadandinstallarduinoide",
  "level": 4
}, {
  "value": "Install the ESP32 development board",
  "id": "installtheesp32developmentboard",
  "level": 4
}, {
  "value": "Install required libraries",
  "id": "installrequiredlibraries",
  "level": 4
}, {
  "value": "lvgl",
  "id": "lvgl",
  "level": 4
}, {
  "value": "GFX_Library_for_Arduino",
  "id": "gfx_library_for_arduino",
  "level": 4
}, {
  "value": "JPEGDEC",
  "id": "jpegdec",
  "level": 4
}, {
  "value": "PNGdec",
  "id": "pngdec",
  "level": 4
}, {
  "value": "XPowersLib",
  "id": "xpowerslib",
  "level": 4
}, {
  "value": "SensorLib",
  "id": "sensorlib",
  "level": 4
}, {
  "value": "ESP32-audioI2S-master",
  "id": "esp32-audioi2s-master",
  "level": 4
}, {
  "value": "Adafruit MCP23017 Arduino Library",
  "id": "adafruit-mcp23017-arduino-library",
  "level": 4
}, {
  "value": "es8311",
  "id": "es8311",
  "level": 4
}, {
  "value": "Instance program",
  "id": "instanceprogram",
  "level": 3
}, {
  "value": "01_Drive AXP2101",
  "id": "01_driveaxp2101",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect",
  "level": 4
}, {
  "value": "02_Drive ES8311",
  "id": "02_drivees8311",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-1",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-1",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-1",
  "level": 4
}, {
  "value": "03_Drive PCF85063",
  "id": "03_drivepcf85063",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-2",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-2",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-2",
  "level": 4
}, {
  "value": "04_Drive QMI8658",
  "id": "04_driveqmi8658",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-3",
  "level": 4
}, {
  "value": "hardware connection",
  "id": "hardwareconnection-3",
  "level": 4
}, {
  "value": "operating effect",
  "id": "operatingeffect-3",
  "level": 4
}, {
  "value": "05_WIFI_AP",
  "id": "05_wifi_ap",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-4",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-4",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-4",
  "level": 4
}, {
  "value": "06_WIFI_STA",
  "id": "06_wifi_sta",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-5",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-5",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-5",
  "level": 4
}, {
  "value": "07_Driver for Quectel_L76K",
  "id": "07_driverforquectel_l76k",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-6",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-6",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-6",
  "level": 4
}, {
  "value": "08_Drive SHT41_getdata",
  "id": "08_drivesht41_getdata",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-7",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-7",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-7",
  "level": 4
}, {
  "value": "09_gfx_LoRa AIOT Development Kit!",
  "id": "09_gfx_loraaiotdevelopmentkit",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-8",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-8",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-8",
  "level": 4
}, {
  "value": "10_lvgl_PCF85063",
  "id": "10_lvgl_pcf85063",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-9",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-9",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-9",
  "level": 4
}, {
  "value": "11_lvgl_QMI8658",
  "id": "11_lvgl_qmi8658",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-10",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-10",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-10",
  "level": 4
}, {
  "value": "12_lvgl_SHT41",
  "id": "12_lvgl_sht41",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-11",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-11",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-11",
  "level": 4
}, {
  "value": "13_lvgl_AXP2101",
  "id": "13_lvgl_axp2101",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-12",
  "level": 4
}, {
  "value": "Data Description",
  "id": "datadescription",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-12",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-12",
  "level": 4
}, {
  "value": "14_lvgl_LoRa",
  "id": "14_lvgl_lora",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-13",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-13",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-13",
  "level": 4
}, {
  "value": "15_comprehensiv_example",
  "id": "15_comprehensiv_example",
  "level": 3
}, {
  "value": "Program Description",
  "id": "programdescription-14",
  "level": 4
}, {
  "value": "Hardware connection",
  "id": "hardwareconnection-14",
  "level": 4
}, {
  "value": "Operating effect",
  "id": "operatingeffect-14",
  "level": 4
}, {
  "value": "Resource downloads",
  "id": "resource-downloads",
  "level": 2
}, {
  "value": "Xiaozhi-firmware",
  "id": "xiaozhi-firmware",
  "level": 3
}, {
  "value": "MESHTASTIC-firmware",
  "id": "meshtastic-firmware",
  "level": 3
}, {
  "value": "Arduino deme",
  "id": "arduino-deme",
  "level": 3
}, {
  "value": "ESP-IDF deme",
  "id": "esp-idf-deme",
  "level": 3
}, {
  "value": "Application-Specific Firmware",
  "id": "application-specific-firmware",
  "level": 3
}, {
  "value": "Flashing tool",
  "id": "flashing-tool",
  "level": 3
}, {
  "value": "ardware specifications",
  "id": "ardware-specifications",
  "level": 3
}, {
  "value": "3D models",
  "id": "model-view",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    del: "del",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "w10loraaiotdevkit",
      children: "W10(LoRa AIOT Dev Kit)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Product display image："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(40739)/* ["default"] */ .A) + "",
        width: "3029",
        height: "1773"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(38932)/* ["default"] */ .A) + "",
        width: "2850",
        height: "1645"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you’d like to view the 3D renderings, please click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "#model-view",
        children: "link"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "productintroduction",
      children: "Product Introduction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This product is designed to provide the first AIOT hardware development platform for IoT engineers and smart hardware developers, facilitating their needs for debugging software functions, expanding peripheral modules, and testing software performance. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The product utilizes the currently mainstream ESP32-S3 processor, paired with a LoRa module and a GPS module. It integrates the commonly used WiFi, Bluetooth, and LoRa communication standards in IoT, supports the 850-930MHz frequency band and LoRaWAN protocol, adapts to Mesh networks, and meets the needs of smart cities, industrial control, and other scenarios."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "productfeatures",
      children: "Product Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with an Xtensa® 32-bit LX7 dual-core processor with a clock speed of up to 240MHz, featuring built-in WiFi and BLE capabilities. "
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Integrated with LoRa and GPS modules, enabling easy communication and data transmission in wireless environments, as well as outdoor positioning and tracking. "
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "On-board IMU and temperature/humidity sensors for motion detection and environmental monitoring, with wireless synchronization and upload capabilities. "
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "On-board RTC clock chip for clock, alarm clock, and perpetual calendar functions, also serving as a timestamp standard for wireless communication."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with an audio Codec chip, compatible with mainstream LCD and OLED displays, enabling easy AI voice intercom and chat functions."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with a camera interface, supporting OV2640 and OV5640 cameras, for image and video capture, display, and upload."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with a lithium battery interface, allowing the product to operate normally without USB connection."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Extended IO compatible with Arduino interface, enabling compatibility with various Arduino peripheral modules and accessories"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "technicalspecifications",
      children: "Technical Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwarespecifications",
      children: "Hardware specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Functional Category"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Function Description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Product Name"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "LoRa AIOT Dev Kit"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Model"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "DEVK1.0"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Power Supply Interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "USB TYPE-C 5V/3A"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Main Control Chip"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ESP32-S3R8 Xtensa® 32-bit LX7 dual-core microprocessor, with a clock speed up to 240MHz"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "LoRa Module"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "EBYTE E22-900MM22S supports the 850-930MHz frequency band and LoRaWAN protocol"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "GPS Module"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Quectel L76K supports multiple satellite systems including GPS, GLONASS, BDS, and QZSS"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "LCD"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Supports a 3.5-inch capacitive touch display screen, FPC (SPI+I2C) interface, resolution of 320x480, and 262K colors"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Supports 3.5-inch TFT Arduino (LCD) interface display with a resolution of 320*480"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Supports a 1.54-inch ISP full-view SPI interface display with a resolution of 240x240 and full-color RGB"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Supports a 1.3-inch OLED SPI interface LCD display with a resolution of 128x64 and full-color RGB"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Supports a 1.47-inch TFT SPI interface LCD display with a resolution of 172x320 and full-color RGB"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Camera"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Supports OV2640 2 million pixel camera"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Support OV5640 5 million pixel camera"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Audio codec"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ES8311 is a low-power audio codec chip with 24-bit resolution, supporting sampling frequencies ranging from 8 to 96kHz"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Temperature and Humidity Sensor"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SHT41 Temperature: 0 - 75℃, accuracy ±0.2℃; Humidity: 0 - 100%, accuracy ±2%"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "IMU Sensor"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "QMI8658 6-axis MEMS IMU chip, integrating 3-axis gyroscope and 3-axis accelerometer"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "RTC real-time clock"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The PCF85063 RTC calendar chip boasts extremely low power consumption, with a standby current of just 0.25μA"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Power Management"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "AXP2101 is a highly integrated PMIC, featuring built-in 4-channel DC-DC converters and 1-channel fuel gauge"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "IO expansion port"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Compatible with Arduino interface, featuring 2 sets of UART, 1 set of ADC, 1 set of SPI, and 1 set of I2C interfaces"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Debugging interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1 set of JTAG interface"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "USB communication port"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "One set of USB 2.0 communication interfaces, primarily utilizing the USB CDC function"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Button"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1 reset button, 1 BOOT button"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Storage"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "External 16MB SPI Flash"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Number of layers"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "4 floors"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Board material"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "RF-4 (glass fiber board)"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Veneer weight"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "30.8g"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Fixed hole spacing"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "73.80*45.00mm"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Board size"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "83.40*55.00mm"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Operating Temperature"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-40℃~85℃"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Product Certification"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "FCC、CE、RoHs"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwaremanual",
      children: "Hardware Manual"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(88057)/* ["default"] */ .A) + "",
        width: "941",
        height: "768"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Number"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Resource description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "RESET button, press to restart the device, used for fault recovery and program re-execution"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PH2.0 lithium battery interface, connected to a 3.7V lithium battery via a PH2.0_2PIN connector"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "3"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The AXP2101 power management chip is responsible for power distribution, voltage regulation, and power consumption control, ensuring stable power supply to the device"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "4"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The audio power amplifier NS4150B can deliver an output power of up to 2.8W under a 4Ω load condition, with a maximum output of 3W"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "5"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "E22 - 900MM22S LoRa module, based on the SX1262 chip, operates in the 850 - 930MHz frequency band, with a maximum transmission power of 22dBm"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "6"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Quectel L76K GPS module supports multiple satellite systems including GPS, GLONASS, BDS, and QZSS"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "7"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PH1.25 speaker connector (loudspeaker) interface, used for audio output, supports speakers up to 3W"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "8"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SMA socket, connected to LoRa 850~930Mhz antenna"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "9"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SMA socket, connected to LoRa 850~930Mhz antenna"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "10"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The patch ceramic antenna enables wireless signal (Wi-Fi, Bluetooth) transmission and reception, and can operate without the need for additional external antennas"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "11"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ES8311 is a low-power audio codec chip that processes audio signals (encoding and decoding), enabling devices to record and play sound"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "12"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Microphone, used for collecting sound signals, enabling recording and voice interaction functions"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "13"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ESP32 - S3R8 core controller is a system-on-chip (SoC) integrating Wi-Fi and Bluetooth functions, operating at a frequency of 240MHz, and also incorporates 8MB of pseudo-static random access memory (PSRAM) for extended storage"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "14"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The PCF85063 RTC clock chip precisely provides a time reference, enabling devices to have real-time clock functionality"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "15"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "W25Q128JVSIQ 16MB capacity NOR-Flash memory chip"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "16"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The MCP23017 is a 16-bit I²C serial bus I/O expansion chip that supports a wide voltage range of 1.8 V to 5.5 V and features interrupt outputs, weak pull-up functionality and configuration registers"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "17"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "BOOT button, start mode selection button, often used in conjunction with the reset button, for programming devices"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "18"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "3030 0.6W RGB LED light"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "19"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PWR power button, used to control the power-on/off of the device"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "20"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SHT41 temperature and humidity sensor, featuring an I²C interface, boasts high accuracy (±0.1°C/±1.5% RH), low power consumption, and a compact size (2.5×2.5×0.9mm)"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "21"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "QMI8658 six-axis inertial measurement unit (IMU), including 3-axis gyroscope (for measuring angular velocity) and 3-axis accelerometer (for measuring acceleration)"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "22"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "3.5-inch LCD display FPC holder, integrating SPI, I2C, and SDIO interfaces"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "23"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Type-C interface, used for device power supply and data transmission"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareinterface",
      children: "Hardware interface"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(94982)/* ["default"] */ .A) + "",
        width: "948",
        height: "686"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(33999)/* ["default"] */ .A) + "",
        width: "687",
        height: "355"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Interface Name"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Image Position Marker"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Functional Description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "USB Type-C interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "J9"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Power supply (5V/3A, supports PD fast charging) and data transmission, USB 2.0 CDC function"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "LoRa antenna interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ANT3"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SMA male-female LoRa 850~930Mhz rod antenna or external antenna"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "GPS antenna interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ANT2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SMA external screw internal needle GPS active antenna"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Lithium battery interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "CON2 (interface definitions from top to bottom)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PH2.0_2PIN connector, input 3.7~4.2V, pin 1 for GND, pin 2 for VBAT+ (battery positive input)"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Horn interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "CON3"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PH1.25 interface, 1 pin SPK+ (audio output positive), 2 pins SPK- (audio output negative), supports up to 3W speaker"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Camera interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "J1（CAM FPC）"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "24Pin FPC interface, supporting OV2640/OV5640 cameras, including power, data, and control pins"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "LCD FPC interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "J2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "18Pin FPC interface, supporting 3.5-inch capacitive touch screen, including SPI/SDIO/I2C interfaces and backlight control"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "IO expansion interface"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "J5/J6/J7/J8"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Compatible with Arduino standards, including UART, SPI, I2C, GPIO and other pins, supports external module expansion"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "productdimensions",
      children: "Product dimensions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Product dimensions image："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(15092)/* ["default"] */ .A) + "",
        width: "904",
        height: "599"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "instructionsforuse",
      children: "Instructions for Use"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Software：Arduino、flash_download_tool"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hardware："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "W10(LoRa AIOT Dev Kit)"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "USB cable, type A male to type C male, x1"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with a 1.54-inch ISP full-view SPI interface display"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with PH1.25 interface speaker"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with GPS antenna"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Equipped with LoRa antenna"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "weighing-scale",
      children: "Weighing Scale"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      controls: true,
      width: "100%",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/video/w10/L002345-W10_weighG.mp4",
        type: "video/mp4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Your browser does not support MP4 video playback. Please use a different browser."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step_counting",
      children: "Step_counting"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      controls: true,
      width: "100%",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/video/w10/L002345-W10_step_counting.mp4",
        type: "video/mp4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Your browser does not support MP4 video playback. Please use a different browser."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "temperature-and-humidity",
      children: "Temperature and Humidity"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      controls: true,
      width: "100%",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/video/w10/L002345-W10_t&h-G.mp4",
        type: "video/mp4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Your browser does not support MP4 video playback. Please use a different browser."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "communication-features",
      children: "Communication Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      controls: true,
      width: "100%",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/video/w10/L002345-W10_communication.mp4",
        type: "video/mp4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Your browser does not support MP4 video playback. Please use a different browser."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "xiaozhiaiapplication",
      children: "Xiaozhi AI Application"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "firmwareflashing",
      children: "Firmware flashing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      controls: true,
      width: "100%",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/video/w10/W10_fireware.mp4",
        type: "video/mp4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Your browser does not support MP4 video playback. Please use a different browser."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "flash_download_tool",
      children: "flash_download_tool "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Download the flash_download_tool"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.espressif.com.cn/en/tools-type/flash-download-tools",
        children: "https://www.espressif.com.cn/en/tools-type/flash-download-tools"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Open the tool program"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(36221)/* ["default"] */ .A) + "",
        width: "604",
        height: "402"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the type of ESP32-S3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(2154)/* ["default"] */ .A) + "",
        width: "230",
        height: "216"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the bin file that needs to be burned, specify to start burning from the 0x00 address, and choose SPI SPEED and SPI MODE. Click START to proceed with the burning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(41011)/* ["default"] */ .A) + "",
        width: "656",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can see the burning process on this interface"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(11235)/* ["default"] */ .A) + "",
        width: "884",
        height: "704"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Burn completed"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(6010)/* ["default"] */ .A) + "",
        width: "662",
        height: "704"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basicusage",
      children: "Basic Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After the firmware is programmed, a prompt message will be displayed on the display screen"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
      controls: true,
      width: "100%",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        src: "/video/w10/L002345-W10_ai.mp4",
        type: "video/mp4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Your browser does not support MP4 video playback. Please use a different browser."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "startthenetworkconfiguration",
      children: "Start the network configuration"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Connect to the device's WiFi network using a mobile phone or computer: Xiaozhi-xxxxxx. After successful connection, the device's network configuration page will automatically redirect. If it does not redirect automatically, you need to manually open a browser and visit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://192.168.4.1",
          children: "http://192.168.4.1"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image-20251230094339353.jpeg",
        src: (__webpack_require__(14321)/* ["default"] */ .A) + "",
        width: "390",
        height: "310"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "On the network configuration page, select the WiFi name (only supports 2.4G, and the maximum compatibility option must be turned on for iPhone hotspots). The SSID will be automatically filled in. Enter the password below, and then click the \"Connect\" button"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "image-20251230094356765.jpeg",
            src: (__webpack_require__(74376)/* ["default"] */ .A) + "",
            width: "324",
            height: "442"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "After successful connection, the device will automatically restart. If it does not restart automatically, you need to manually power on the device again"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "addnewdevicetothemanagementbackend",
      children: "Add new device to the management backend"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Ensure that the device is connected to the Internet and a prompt appears asking to add the device with a 6-digit device verification code (which can be repeated to wake up and re-listen)"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "image.png",
            src: (__webpack_require__(65895)/* ["default"] */ .A) + "",
            width: "480",
            height: "292"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Click here to visit the Xiaozhi AI Chatbot - Control Panel backend: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://xiaozhi.me",
            children: "https://xiaozhi.me"
          }), ". If you haven't registered, please create an account first"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(78206)/* ["default"] */ .A) + "",
        width: "1420",
        height: "562"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Login account"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(63957)/* ["default"] */ .A) + "",
        width: "1424",
        height: "686"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Use the verification code displayed on the screen and being played to proceed with the addition"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(97420)/* ["default"] */ .A) + "",
        width: "981",
        height: "251"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "The device will be automatically activated and displayed on the \"Device Management\" page, ready for normal use. "
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Use \"Hello, XiaoZhi\" to wake up the device, and then you can engage in voice conversations"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(77307)/* ["default"] */ .A) + "",
        width: "511",
        height: "491"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "xiaozhisadditionallearninglinks",
      children: "Xiaozhi's additional learning links"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://ccnphfhqs21z.feishu.cn/wiki/F5krwD16viZoF0kKkvDcrZNYnhb",
            children: "XiaoZhi AI Chatbot Encyclopedia"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://rcnv1t9vps13.feishu.cn/wiki/JiQowaSe1itt07kyVvZcHFcQnee",
            children: "Frequently Asked Questions and Answers for the XiaoZhi AI Chatbot"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "arduinodevelopment",
      children: "Arduino development"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "environmentsetup",
      children: "Environment setup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "downloadandinstallarduinoide",
      children: "Download and install Arduino IDE"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Arduino download websit：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.arduino.cc/en/software/",
        children: "arduino.cc/en/software"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(11954)/* ["default"] */ .A) + "",
        width: "1425",
        height: "711"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Follow the installation guide of Arduino software to proceed with the installation and download"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "installtheesp32developmentboard",
      children: "Install the ESP32 development board"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "To use ESP32-related boards in the Arduino IDE, you must first install the \"esp32 by Espressif Systems\" development board software package"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Install according to the board installation requirements"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After opening the software"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "File - Preferences"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(32082)/* ["default"] */ .A) + "",
        width: "255",
        height: "449"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Add the address of the development board manager"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json",
        children: "https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select \"OK\" after completion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(46907)/* ["default"] */ .A) + "",
        width: "817",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Install the development board"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Select the Development Board Manager on the left side of the software"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Search for \"esp32\" in the search bar"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Select a version of the development board esp32 by Espressif Systems that is ≥3.2.0 in the version column found in the search results"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Click to install"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(68576)/* ["default"] */ .A) + "",
        width: "279",
        height: "625"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Clicking it will result in a similar prompt message appearing in the lower right corner of the software, indicating that the download is pending (please ensure a stable network connection while waiting for the download)"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "image.png",
            src: (__webpack_require__(46697)/* ["default"] */ .A) + "",
            width: "991",
            height: "243"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "A successful prompt message will appear after the download is complete"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "image.png",
            src: (__webpack_require__(22966)/* ["default"] */ .A) + "",
            width: "531",
            height: "577"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "The word \"Installed\" will appear when searching again"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(19903)/* ["default"] */ .A) + "",
        width: "279",
        height: "625"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "installrequiredlibraries",
      children: "Install required libraries"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "When installing Arduino libraries, there are usually two options to choose from: `online installation` and `offline installation`. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If the library installation requires offline installation, the provided library file must be used. For most libraries, users can easily search and install them through the online library manager of the Arduino software. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, some open-source libraries or custom libraries have not been synchronized to the Arduino library manager, and therefore cannot be obtained through online search. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this case, users can only manually install these libraries through offline methods."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The W10 (LoRa AIOT Dev Kit) library file is stored in the example program. Click here to jump to it:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(14512)/* ["default"] */ .A) + "",
        children: "library file"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The library files that need to be downloaded for LoRa AIOT Dev Kit (DEVK1.0) W10 are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Database name"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Instructions"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Version"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Library installation requirements"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "lvgl"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "LVGL graphical library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v8.4.0"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "GFX_Library_for_Arduino"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "GFX graphical library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v1.5.5"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "JPEGDEC"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "JPG decoding library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v1.8.2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PNGdec"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PNG decoding library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v1.1.3"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "XPowersLib"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PNG decoding library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v0.2.9"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SensorLib"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "PNG decoding library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v0.3.1"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "ESP32-audioI2S-master"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Audio processing library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v3.3.0"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Adafruit MCP23017 Arduino Library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Extended IO library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v2.3.2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "es8311"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "es8311 driver library"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "---"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "\"Online\" installation"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Steps for downloading library files online:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "lvgl",
      children: "lvgl"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Select \"LIBRARY MANAGER\" in the sidebar"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Input the name of the library you want to install in the search box, such as **\"lvgl\"**"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Select version 8.4.0 in the box"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(83044)/* ["default"] */ .A) + "",
        width: "273",
        height: "363"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation successful"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(36941)/* ["default"] */ .A) + "",
        width: "1265",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "gfx_library_for_arduino",
      children: "GFX_Library_for_Arduino"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the corresponding version 1.5.5"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(79162)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation process"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(26915)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation successful"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(14717)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "jpegdec",
      children: "JPEGDEC"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the corresponding version 1.8.2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(93588)/* ["default"] */ .A) + "",
        width: "273",
        height: "325"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The pop-up prompt message indicates that multiple dependencies need to be installed. Select \"Install All\""
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(16047)/* ["default"] */ .A) + "",
        width: "1265",
        height: "429"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Waiting for installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(30950)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation successful"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(19577)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "pngdec",
      children: "PNGdec"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the corresponding version 1.1.3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(3824)/* ["default"] */ .A) + "",
        width: "353",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Waiting for installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(69227)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation successful"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(5570)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "xpowerslib",
      children: "XPowersLib"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the corresponding version 0.2.9"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(6437)/* ["default"] */ .A) + "",
        width: "351",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Waiting for installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(88924)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation successful"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(79316)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "sensorlib",
      children: "SensorLib"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the corresponding version 0.3.1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(445)/* ["default"] */ .A) + "",
        width: "343",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Waiting for installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(19238)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation successful"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(783)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "esp32-audioi2s-master",
      children: "ESP32-audioI2S-master"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the corresponding version 3.3.0"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(15408)/* ["default"] */ .A) + "",
        width: "349",
        height: "675"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Waiting for installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(21657)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Installation successful"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(38722)/* ["default"] */ .A) + "",
        width: "1265",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "adafruit-mcp23017-arduino-library",
      children: "Adafruit MCP23017 Arduino Library"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Select the corresponding version 2.3.2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(29227)/* ["default"] */ .A) + "",
        width: "267",
        height: "333"
      }), "\r\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(7836)/* ["default"] */ .A) + "",
        width: "748",
        height: "476"
      }), "\r\nWaiting for installation"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(60101)/* ["default"] */ .A) + "",
        width: "748",
        height: "476"
      }), "\r\nInstallation successful"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(29567)/* ["default"] */ .A) + "",
        width: "748",
        height: "476"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "es8311",
      children: "es8311"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This package requires offline installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "First, download the library for es8311"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(32630)/* ["default"] */ .A) + "",
        width: "645",
        height: "159"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Place this downloaded library file in the Arduino software library file storage location"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Default storage location:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "C:\\Users(Username)\\Documents\\Arduino\\libraries"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(46605)/* ["default"] */ .A) + "",
        width: "717",
        height: "499"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If your location has changed, you can view the location information on your computer through the software"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(92708)/* ["default"] */ .A) + "",
        width: "1265",
        height: "627"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "instanceprogram",
      children: "Instance program"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "All instances come with source code and pre-packaged bin files, which can be directly programmed using the flash_download_tool or through an online web page。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "LoRa AIOT Dev Kit Engineering Parameter Configuration"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The parameters must be configured according to the information shown in the image for the firmware to be flashed correctly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(56571)/* ["default"] */ .A) + "",
        width: "489",
        height: "729"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "01_driveaxp2101",
      children: "01_Drive AXP2101"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Real-time printing of the working status of AXP2101 PMU, including charging/discharging/standby, as well as VBUS/battery/system voltage and remaining battery capacity"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Connect the board to the computer using a USB cable"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "No abnormality on the screen"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Open the serial port monitor (Baud rate 115200)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(41746)/* ["default"] */ .A) + "",
        width: "1267",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "02_drivees8311",
      children: "02_Drive ES8311"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-1",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This example demonstrates the use of the LoRa AIOT Dev Kit (W10) to drive the ES8311 audio codec, enabling audio recording and playback functions."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-1",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect CON3 port to the speaker"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(56361)/* ["default"] */ .A) + "",
        width: "913",
        height: "671"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-1",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "After the programming is completed, press \"boot\" to record a 5-second sound, and then play it"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Open the serial port monitor (Baud rate 115200)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(78240)/* ["default"] */ .A) + "",
        width: "1255",
        height: "703"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "03_drivepcf85063",
      children: "03_Drive PCF85063"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-2",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "● Drive PCF85063, set time and date, and obtain time"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-2",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Connect the board to the computer using a USB cable"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-2",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "● No abnormality on the screen"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "● Open the serial port monitor (Baud rate 115200)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(79335)/* ["default"] */ .A) + "",
        width: "1265",
        height: "617"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "04_driveqmi8658",
      children: "04_Drive QMI8658"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-3",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Drive QMI8658 to obtain and print the temperatures of Accel, Gyro, and IMU"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-3",
      children: "hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Connect the board to the computer using a USB cable"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-3",
      children: "operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "No phenomenon on the screen"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Open the serial port monitor"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(26846)/* ["default"] */ .A) + "",
        width: "1129",
        height: "549"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "05_wifi_ap",
      children: "05_WIFI_AP"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-4",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This example allows the development board to be set as a hotspot, enabling mobile phones or other devices in STA mode to connect to the development board"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-plaintext",
        children: "const char *ssid = \"W10\";\r\nconst char *password = \"12345678\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "SSID: The correspondingly set WiFi name"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "password: The corresponding WiFi password set"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-4",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Connect the board to the computer using a USB cable"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-4",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "After programming, open the serial terminal. If the mobile phone or computer device successfully connects to the hotspot, the MAC address of the device will be output"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Mobile screenshot:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(7566)/* ["default"] */ .A) + "",
        width: "433",
        height: "865"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Serial port monitor status"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(50583)/* ["default"] */ .A) + "",
        width: "1265",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "06_wifi_sta",
      children: "06_WIFI_STA"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-5",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "This example allows the development board to be configured as an STA device, enabling it to connect to a router and thereby access the system network"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Find the ssid and password in the 07_WIFI_STA.ino file, and then modify them to the SSID and Password of the router available in the current environment."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-plaintext",
        children: "const char *ssid = \"you_ssid\"; \r\nconst char *password = \"you_password\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-5",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Connect the board to the computer using a USB cable"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-5",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "After programming, open the serial terminal. If the device successfully connects to the hotspot, it will output the obtained IP address, as shown in the figure:"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(66300)/* ["default"] */ .A) + "",
        width: "1265",
        height: "229"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "07_driverforquectel_l76k",
      children: "07_Driver for Quectel_L76K"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-6",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "This example can drive the L76K device of the development board"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Output information such as UTC (Coordinated Universal Time), latitude and longitude, positioning quality, number of satellites, horizontal dilution of precision, and altitude in sequence"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-6",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the equipped GPS antenna to the ANT2 interface of the board, and the effect is shown in the figure below:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(79365)/* ["default"] */ .A) + "",
        width: "1095",
        height: "743"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-6",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "After programming, open the serial terminal"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "If the operating environment is indoors and GPS cannot receive information, the output effect of the serial port terminal will be"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(94698)/* ["default"] */ .A) + "",
        width: "1257",
        height: "321"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "If the operating environment is outdoors and GPS can receive information normally, the output effect of the serial port terminal will be"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "The current latitude and longitude format is NMEA format."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(49907)/* ["default"] */ .A) + "",
        width: "1027",
        height: "409"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "08_drivesht41_getdata",
      children: "08_Drive SHT41_getdata"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-7",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "● Initialize the SHT41 chip through the I2C protocol, and then print the temperature and humidity information read every 3 seconds to the terminal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-7",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "● Connect the board to the computer using a USB cable"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-7",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "● Open the serial port monitor to view the temperature and humidity data printed out, as shown in the figure below:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(75416)/* ["default"] */ .A) + "",
        width: "1257",
        height: "461"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "09_gfx_loraaiotdevelopmentkit",
      children: "09_gfx_LoRa AIOT Development Kit!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-8",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This program drives the LCD1.54 screen, displaying \"LoRa AIOT Development Kit\" on it! and other information"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-8",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the 1.54-inch LCD screen to the OLED J4 interface of the board"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-8",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "After successfully uploading the program, you need to press the RST button on the board to see the displayed text"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(43681)/* ["default"] */ .A) + "",
        width: "965",
        height: "621"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "10_lvgl_pcf85063",
      children: "10_lvgl_PCF85063"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-9",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This example demonstrates how to use the W10(LoRa AIOT Dev Kit) to obtain the time and date data of the PCF85063 and display it through the lvgl library."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-9",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the 1.54-inch LCD screen to the OLED J4 interface of the board"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-9",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Serial port monitor:"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(3878)/* ["default"] */ .A) + "",
        width: "1265",
        height: "709"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Board status:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(42895)/* ["default"] */ .A) + "",
        width: "853",
        height: "559"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "11_lvgl_qmi8658",
      children: "11_lvgl_QMI8658"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-10",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This example demonstrates the use of W10 (LoRa AIOT Dev Kit) to obtain data from qmi8658 and display it through the lvgl library."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-10",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the 1.54-inch LCD screen to the OLED J4 interface of the board"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-10",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Serial port monitor:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(26153)/* ["default"] */ .A) + "",
        width: "1265",
        height: "617"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Board status:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(71328)/* ["default"] */ .A) + "",
        width: "857",
        height: "511"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "12_lvgl_sht41",
      children: "12_lvgl_SHT41"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-11",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This example demonstrates the use of W10 (LoRa AIOT Dev Kit) to obtain data from qmi8658 and display it through the lvgl library."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-11",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the 1.54-inch LCD screen to the OLED J4 interface of the board"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-11",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Serial port monitor:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(33307)/* ["default"] */ .A) + "",
        width: "1265",
        height: "645"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Board status:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(35442)/* ["default"] */ .A) + "",
        width: "623",
        height: "365"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "13_lvgl_axp2101",
      children: "13_lvgl_AXP2101"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-12",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This example demonstrates the use of W10 (LoRa AIOT Dev Kit) to obtain data from axp2101 and display it through the lvgl library."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "datadescription",
      children: "Data Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Numerical name"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Meaning"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Normal range"
            })
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Battery Voltage"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Battery voltage (lithium battery)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["3000", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.del, {
              children: "4200 mV（3.0"
            }), "4.2V）"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "VBUS Voltage"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "VBUS input voltage (external power supply, such as USB/adapter)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["4000", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.del, {
              children: "5500 mV（4"
            }), "5.5V）"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "System Voltage"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "System output voltage (voltage supplied by AXP2101 to the main controller/peripherals)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Determined by the configured DC/ALDO/BLDO"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Battery Percent"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Percentage of battery remaining"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "0~100 %"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Charging"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Battery charging status"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "YES = charging, NO = not charging"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-12",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the 1.54-inch LCD screen to the OLED J4 interface of the board"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the lithium battery to the CON3 interface"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-12",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Only lithium batteries:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(7949)/* ["default"] */ .A) + "",
        width: "929",
        height: "549"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Lithium battery + USB:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(68004)/* ["default"] */ .A) + "",
        width: "1111",
        height: "621"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "14_lvgl_lora",
      children: "14_lvgl_LoRa"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-13",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This example demonstrates the use of W10 (LoRa AIOT Dev Kit) to obtain data from E22-900MM22S (LoRa) and display it through the lvgl library."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-13",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the 1.54-inch LCD screen to the OLED J4 interface of the board"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Antenna connected to ANT3 LoRa interface"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-13",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Single module test: (one device)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Check whether the module status is \"Connected\""
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Check whether the parameters (frequency, power, mode) are displayed correctly"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Check whether the TX count increases when sending messages"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(6303)/* ["default"] */ .A) + "",
        width: "1113",
        height: "655"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Dual-module test: (two devices)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "One device is in TX mode, while the other is in RX mode"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Check whether the module status is \"Connected\""
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Check whether the parameters (frequency, power, mode) are displayed correctly"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Check whether the RX count increases when sending messages"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Check Last: Whether data from 111-999 will be displayed"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Mode switching: When pressing RST for reset, entering TX mode without pressing the Boot button; when pressing RST for reset, entering RX mode by holding down the Boot button"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(26326)/* ["default"] */ .A) + "",
        width: "1109",
        height: "633"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "15_comprehensiv_example",
      children: "15_comprehensiv_example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "programdescription-14",
      children: "Program Description"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This example demonstrates the use of W10 (LoRa AIOT Dev Kit) to test whether various devices are functioning properly. It displays IMU, GPS, RTC, and Temp/Hum data on the main page. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Short-pressing the boot button on the main page enters LoRa's TX transmission mode, while long-pressing the boot button enters LoRa's RX reception mode, and the display is managed through the lvgl library."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hardwareconnection-14",
      children: "Hardware connection"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the board to the computer using a USB cable"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Connect the 1.54-inch LCD screen to the OLED J4 interface of the board"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Antenna connected to ANT3 LORA interface"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(38257)/* ["default"] */ .A) + "",
        width: "371",
        height: "868"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "operatingeffect-14",
      children: "Operating effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Upon programme initiation, the connected display will first present the Sensor Detection interface."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This interface serves to verify the functionality of all peripheral devices."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Speaker: Audio output functionality; upon connection, the speaker will emit three beeps (Speaker: Testing...) indicating normal operation (Speaker: ok)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Subsequent checks will detect each peripheral (Detecting...), displaying “ok” for successful detection or “Failed” for unsuccessful detection."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(24040)/* ["default"] */ .A) + "",
        width: "439",
        height: "313"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After approximately 20 seconds, the display will transition to the Main Screen interface."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This interface displays information for switching between the device's STA ID, IMU, RTC, Temp/Hum, GPS, and LoRa interfaces."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Correct data display interface:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Indoor (no GPS information, as indoor GPS cannot receive satellite data):"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(94160)/* ["default"] */ .A) + "",
        width: "463",
        height: "309"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Outdoor open locations (with GPS information), powered by battery or USB:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(9913)/* ["default"] */ .A) + "",
        width: "467",
        height: "319"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This ID on the interface corresponds to each device's STA address, which can be matched with the STA address on the programming tool:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "image.png",
              src: (__webpack_require__(95906)/* ["default"] */ .A) + "",
              width: "271",
              height: "441"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "image.png",
              src: (__webpack_require__(59563)/* ["default"] */ .A) + "",
              width: "227",
              height: "257"
            })
          })]
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "LoRa Functional testing："
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["📌To view received messages via LoRa, one device must be in transmit mode and another in receive mode (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "with antennas operating on the same frequency band"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "On the Main Screen interface, briefly press the BOOT button to enter LoRa TX (transmit mode)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "On the Main Screen interface, briefly press the BOOT button to enter LoRa RX (receive mode)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(83924)/* ["default"] */ .A) + "",
        width: "387",
        height: "393"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After entering separately, the Data displayed on both boards' screens is identical, indicating successful transmission and reception of data."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(5053)/* ["default"] */ .A) + "",
        width: "335",
        height: "471"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the LoRa Test[TX] \r\ninterface, briefly press the Boot button to switch to the Main Screen interface and continue displaying data."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the LoRa Test[RX] interface, briefly press the Boot button to switch to the LoRa Test[TX] interface. \r\nIn the LoRa Test[TX] interface, briefly press the Boot button again to switch to the Main Screen interface."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "resource-downloads",
      children: "Resource downloads"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "xiaozhi-firmware",
      children: "Xiaozhi-firmware"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(2219)/* ["default"] */ .A) + "",
        children: "xiaozhi_bin"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(95817)/* ["default"] */ .A) + "",
        children: "xiaozhi_Source_Code"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "meshtastic-firmware",
      children: "MESHTASTIC-firmware"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(99625)/* ["default"] */ .A) + "",
        children: "MESHRASTIC_bin"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(90561)/* ["default"] */ .A) + "",
        children: "MESHRASTIC_Source_Code"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "arduino-deme",
      children: "Arduino deme"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(83468)/* ["default"] */ .A) + "",
        children: "Arduino_demo_zip"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "esp-idf-deme",
      children: "ESP-IDF deme"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(22802)/* ["default"] */ .A) + "",
        children: "ESP-IDF_demo_zip"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "application-specific-firmware",
      children: "Application-Specific Firmware"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(50031)/* ["default"] */ .A) + "",
        children: "step_counting"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(75497)/* ["default"] */ .A) + "",
        children: "Temperature_humidity"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(87255)/* ["default"] */ .A) + "",
        children: "weighing"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "flashing-tool",
      children: "Flashing tool"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(65451)/* ["default"] */ .A) + "",
        children: "flash_download_tool"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ardware-specifications",
      children: "ardware specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(39821)/* ["default"] */ .A) + "",
        children: "W10-Hardware pin distribution"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(3713)/* ["default"] */ .A) + "",
        children: "W10-Schematic diagram"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(48286)/* ["default"] */ .A) + "",
        children: "W10-Pin placement diagram"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "model-view",
      children: "3D models"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(3206)/* ["default"] */ .A) + "",
        children: "W10 3D product models"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 3206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/3D_stp-91695c6240ad70d1a8b22d9d3c540b54.zip");

/***/ },

/***/ 39821
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/W10-Hardware pin distribution20251105-4eae9f40d69a9ba733e80039ca919cba.xlsx");

/***/ },

/***/ 48286
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/W10-Pin placement diagram-026c16b49bfd1247d1abea2663ec74af.pdf");

/***/ },

/***/ 83468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/W10_Arduino_Demo-e20053a1906898bcbdaf5a585ebf61e8.zip");

/***/ },

/***/ 22802
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/W10_Demo_List-c24b068bc1e87474452fd746b94431de.rar");

/***/ },

/***/ 99625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/W10_MESHTASTIC_V2.7.15-3b3da0ccf33c8fd33426c9120a057171.bin");

/***/ },

/***/ 2219
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/firmware-Xiaozhi-V1.7.1-d14bb0871bab2ef09ab9cb019bfcb0ca.bin");

/***/ },

/***/ 65451
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/flash_download_tool-8b0cd67691f02103143d65c114b1c057.zip");

/***/ },

/***/ 14512
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/libraries-f28aa63402d376f2360f49961ec80594.zip");

/***/ },

/***/ 3713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/w10-mb-v1_2-260106-1-bfe6401405f4ba2e5f6ef9f4e798cf18.pdf");

/***/ },

/***/ 75497
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/w10_Temperature_humidity.tar-6332a28e0ddc5e7c9f2062bd54bbf15e.gz");

/***/ },

/***/ 90561
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/w10_meshtastic-c8cb7c3429abd9f61a3519ac43319482.zip");

/***/ },

/***/ 50031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/w10_step_counting.tar-db258dd8efcaa59d43054c3409967c84.gz");

/***/ },

/***/ 87255
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/w10_weighing.tar-2a133620eaa9e394d6c405a27b9ba5b8.gz");

/***/ },

/***/ 95817
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/w10_xiaozhi.tar-b05cf213e17ac57efdd1cf028f1abd66.gz");

/***/ },

/***/ 40739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1-6df9648e5995908666cd56fbbf2bc8f4.jpg");

/***/ },

/***/ 11235
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10-9094de6316150eb58865f53d1405195e.png");

/***/ },

/***/ 6010
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/11-c13d86c7c537ab6ac3b1ee140d4e5daf.png");

/***/ },

/***/ 14321
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12-dc1dbfcb86c5dd02191e0d93f3ce64c9.png");

/***/ },

/***/ 74376
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13-05b3d674b6f35a6622d146df7beb0af7.png");

/***/ },

/***/ 65895
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/14-6cf219b9f95fa9f42c021f81f9c703a8.png");

/***/ },

/***/ 78206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15-a04b3706b19787658bf9642aa31cf3eb.png");

/***/ },

/***/ 63957
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/16-b66b1080a1c677e6df4aba44cb5fed0a.png");

/***/ },

/***/ 97420
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17-715173e9b7545dbc64a5252f9c946e28.png");

/***/ },

/***/ 77307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/18-ed9ae996d295bf0ea829677bc00b7f28.png");

/***/ },

/***/ 11954
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/19-2e02316055572dc802d1ccb5cc0c13bc.png");

/***/ },

/***/ 38932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2-d72f505c583cb6d09edc581d01a29f08.jpg");

/***/ },

/***/ 32082
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20-bc1d7f77db36d500d0f93e82982a9040.png");

/***/ },

/***/ 46907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/21-dbd9448401ddb91038e7380346ef29de.png");

/***/ },

/***/ 68576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/22-fd021a91932244bf63432e6f5062c608.png");

/***/ },

/***/ 46697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 22966
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/24-3a6c476e0b37f1965c1dacb174bed533.png");

/***/ },

/***/ 19903
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/25-fd021a91932244bf63432e6f5062c608.png");

/***/ },

/***/ 83044
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26-4123bb18a02b77ba44921a6a7d24ff5e.png");

/***/ },

/***/ 36941
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27-c4b302556f0c359dd84e017dcef9d831.png");

/***/ },

/***/ 79162
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/28-967b55e76cc8c41e6643e49eccc16b0b.png");

/***/ },

/***/ 26915
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29-3c85316bf43857cd0021cd49e31edb41.png");

/***/ },

/***/ 88057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3-979ccb7e6d6c8a55f89114bea640e1d4.png");

/***/ },

/***/ 14717
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/30-8af3a302d8477cd3e454ddbb1f0eb07b.png");

/***/ },

/***/ 93588
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/31-c3f317c0469e5a1f3a9625ea46b59341.png");

/***/ },

/***/ 16047
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32-56fc68b225f7cecd4dc3a6cda84e067e.png");

/***/ },

/***/ 30950
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/33-80a0fdab103604cedb640262bf984819.png");

/***/ },

/***/ 19577
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/34-45cf0f3d8ee1d775830dc24adfd924fe.png");

/***/ },

/***/ 3824
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/35-1832efdd8c1bbced38361cbb09b232a7.png");

/***/ },

/***/ 69227
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/36-d07f021af94c6208130b06664cbe7424.png");

/***/ },

/***/ 5570
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/37-73cb0c174649ca35ff4227aee7eacbc0.png");

/***/ },

/***/ 6437
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/38-773c78673df320e5510ffa59aa175d82.png");

/***/ },

/***/ 88924
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/39-2fddef4c45e57596a2df686a14b68c4b.png");

/***/ },

/***/ 94982
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4-5b4dc2db795e4d0d580a62b9f997a08d.png");

/***/ },

/***/ 79316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40-bc62dea47b01607ca237c9559cb6f092.png");

/***/ },

/***/ 445
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/41-fc424e85761c912d5e5cd247bf2abf30.png");

/***/ },

/***/ 19238
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/42-9c9b456bb2e43a9b12e46ddb053ce5b5.png");

/***/ },

/***/ 783
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/43-e0e988f25197bbe95bcd9855aa118145.png");

/***/ },

/***/ 15408
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44-866d31c66a9fac675331f27ed2c40e60.png");

/***/ },

/***/ 21657
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/45-49f46223506d810dc870893a2c2da329.png");

/***/ },

/***/ 38722
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46-a2731328413efad662259586f6918f98.png");

/***/ },

/***/ 29227
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/47-4f7250182550549d373d5120512876b6.png");

/***/ },

/***/ 7836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/48-213ea1c14bb12c885e79560a30fc8f93.png");

/***/ },

/***/ 60101
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/49-fd9a90964252e1ae5b340c4270c049c8.png");

/***/ },

/***/ 33999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5-9f714a727b30e5e3c5d97be058b81655.png");

/***/ },

/***/ 29567
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/50-bfcf2257d2f2a1fcd7fa6e7160cd00e7.png");

/***/ },

/***/ 32630
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 46605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/52-594d85da4a81bb3aaf9dbdf3dc7d3b03.png");

/***/ },

/***/ 92708
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/53-ba3e59abf9420c197a792c8fe8151a73.png");

/***/ },

/***/ 56571
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/54-c4365ded2d0c6e8e1e5a8d60f39984c9.png");

/***/ },

/***/ 41746
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/55-63caca645d88a89b9a8448c2d67c5b91.png");

/***/ },

/***/ 56361
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/56-e2c0a0af437c9adb9fa31d8912ca2385.png");

/***/ },

/***/ 78240
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/57-273db4105fb2cdee8124e1fa382c873c.png");

/***/ },

/***/ 79335
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/58-c9b03addb56ac3de7f397f5b9b88027b.png");

/***/ },

/***/ 26846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/59-a3a831bcdeb13f144fb181c87525c27b.png");

/***/ },

/***/ 15092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6-c446ae1ced20b060b460d8dcfa5e7a27.png");

/***/ },

/***/ 7566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/60-18da2c68432a648be9531b4adea2ad8a.png");

/***/ },

/***/ 50583
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/61-511595e8711e30d33a1dde018ea2bb81.png");

/***/ },

/***/ 66300
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/62-de41b163c3c92cd4e14bbf0cab53660f.png");

/***/ },

/***/ 79365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/63-a55a017a76813a08c7ef909077b2c250.png");

/***/ },

/***/ 94698
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/64-2bc529cab2f396972a7c4ffe9c036ec3.png");

/***/ },

/***/ 49907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/65-8d30df8a34d95fb4f1b02e37f0324d7e.png");

/***/ },

/***/ 75416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/66-9a6fd233103026a329a3af6c37fdf062.png");

/***/ },

/***/ 43681
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/67-e6d176d24a2a0bd8d424ff8721f2ad40.png");

/***/ },

/***/ 3878
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/68-06483bd546bede12807db65139bf6e2f.png");

/***/ },

/***/ 42895
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/69-7dc47f5d2a9db5c4e02ba8accd3a8de8.png");

/***/ },

/***/ 36221
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7-463d1f185644fa6b7b94b717082a14d4.png");

/***/ },

/***/ 26153
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/70-5377a4d8000e308091f001e4d8cc5879.png");

/***/ },

/***/ 71328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/71-aa4d5b3146528a48c4025e268ee04add.png");

/***/ },

/***/ 33307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/72-f1f942b8076ab4222053b23aaa517874.png");

/***/ },

/***/ 35442
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/73-a10561069325f7968aecedf3bb7fa58c.png");

/***/ },

/***/ 7949
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/74-480acd72196424e3bbceb918a0c0b42f.png");

/***/ },

/***/ 68004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/75-73368734775bc716782fde7370abad71.png");

/***/ },

/***/ 6303
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/76-7b5fa44cea7d5517c668c3c2d354e185.png");

/***/ },

/***/ 26326
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/77-3ee8bbd37b6f8eab0114908c2f5b7f42.png");

/***/ },

/***/ 38257
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/78-c76645144ce67cf41ab150c0ec4ec83c.png");

/***/ },

/***/ 24040
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/79-6aef2470866b0a6f1d53114e17dd4f61.png");

/***/ },

/***/ 2154
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 94160
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/80-fa8b98e36c8d35716b53c4c2f2d0a746.png");

/***/ },

/***/ 9913
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/81-1d5f7702b442f93483af96d0a6fbd506.png");

/***/ },

/***/ 95906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/82-b0eda5de08820b46a1821f9f91a5c85f.png");

/***/ },

/***/ 59563
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/83-7b52a7eaa9af9cb8bed75fb9d834c8a3.png");

/***/ },

/***/ 83924
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/84-b13573b6065136e4927b24feb4202a51.png");

/***/ },

/***/ 5053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85-431233a33120e1dc3345cf52ccbf521b.png");

/***/ },

/***/ 41011
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9-fba1f60d6d20e214b78c08e1a04a6855.png");

/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);