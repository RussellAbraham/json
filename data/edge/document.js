const DocumentMap = {
    0: "location",
    1: "constructor",
    2: "implementation",
    3: "URL",
    4: "documentURI",
    5: "compatMode",
    6: "characterSet",
    7: "charset",
    8: "inputEncoding",
    9: "contentType",
    10: "doctype",
    11: "documentElement",
    12: "xmlEncoding",
    13: "xmlVersion",
    14: "xmlStandalone",
    15: "domain",
    16: "referrer",
    17: "cookie",
    18: "lastModified",
    19: "readyState",
    20: "title",
    21: "dir",
    22: "body",
    23: "head",
    24: "images",
    25: "embeds",
    26: "plugins",
    27: "links",
    28: "forms",
    29: "scripts",
    30: "currentScript",
    31: "defaultView",
    32: "designMode",
    33: "onreadystatechange",
    34: "anchors",
    35: "applets",
    36: "fgColor",
    37: "linkColor",
    38: "vlinkColor",
    39: "alinkColor",
    40: "bgColor",
    41: "all",
    42: "scrollingElement",
    43: "onpointerlockchange",
    44: "onpointerlockerror",
    45: "hidden",
    46: "visibilityState",
    47: "wasDiscarded",
    48: "featurePolicy",
    49: "webkitVisibilityState",
    50: "webkitHidden",
    51: "onbeforecopy",
    52: "onbeforecut",
    53: "onbeforepaste",
    54: "onfreeze",
    55: "onresume",
    56: "onsearch",
    57: "onsecuritypolicyviolation",
    58: "onvisibilitychange",
    59: "fullscreenEnabled",
    60: "fullscreen",
    61: "onfullscreenchange",
    62: "onfullscreenerror",
    63: "webkitIsFullScreen",
    64: "webkitCurrentFullScreenElement",
    65: "webkitFullscreenEnabled",
    66: "webkitFullscreenElement",
    67: "onwebkitfullscreenchange",
    68: "onwebkitfullscreenerror",
    69: "rootElement",
    70: "onabort",
    71: "onblur",
    72: "oncancel",
    73: "oncanplay",
    74: "oncanplaythrough",
    75: "onchange",
    76: "onclick",
    77: "onclose",
    78: "oncontextmenu",
    79: "oncuechange",
    80: "ondblclick",
    81: "ondrag",
    82: "ondragend",
    83: "ondragenter",
    84: "ondragleave",
    85: "ondragover",
    86: "ondragstart",
    87: "ondrop",
    88: "ondurationchange",
    89: "onemptied",
    90: "onended",
    91: "onerror",
    92: "onfocus",
    93: "onformdata",
    94: "oninput",
    95: "oninvalid",
    96: "onkeydown",
    97: "onkeypress",
    98: "onkeyup",
    99: "onload",
    100: "onloadeddata",
    101: "onloadedmetadata",
    102: "onloadstart",
    103: "onmousedown",
    104: "onmouseenter",
    105: "onmouseleave",
    106: "onmousemove",
    107: "onmouseout",
    108: "onmouseover",
    109: "onmouseup",
    110: "onmousewheel",
    111: "onpause",
    112: "onplay",
    113: "onplaying",
    114: "onprogress",
    115: "onratechange",
    116: "onreset",
    117: "onresize",
    118: "onscroll",
    119: "onseeked",
    120: "onseeking",
    121: "onselect",
    122: "onstalled",
    123: "onsubmit",
    124: "onsuspend",
    125: "ontimeupdate",
    126: "ontoggle",
    127: "onvolumechange",
    128: "onwaiting",
    129: "onwebkitanimationend",
    130: "onwebkitanimationiteration",
    131: "onwebkitanimationstart",
    132: "onwebkittransitionend",
    133: "onwheel",
    134: "onauxclick",
    135: "ongotpointercapture",
    136: "onlostpointercapture",
    137: "onpointerdown",
    138: "onpointermove",
    139: "onpointerup",
    140: "onpointercancel",
    141: "onpointerover",
    142: "onpointerout",
    143: "onpointerenter",
    144: "onpointerleave",
    145: "onselectstart",
    146: "onselectionchange",
    147: "onanimationend",
    148: "onanimationiteration",
    149: "onanimationstart",
    150: "ontransitionrun",
    151: "ontransitionstart",
    152: "ontransitionend",
    153: "ontransitioncancel",
    154: "oncopy",
    155: "oncut",
    156: "onpaste",
    157: "children",
    158: "firstElementChild",
    159: "lastElementChild",
    160: "childElementCount",
    161: "activeElement",
    162: "styleSheets",
    163: "pointerLockElement",
    164: "fullscreenElement",
    165: "adoptedStyleSheets",
    166: "fonts",
    167: "adoptNode",
    168: "append",
    169: "captureEvents",
    170: "caretRangeFromPoint",
    171: "clear",
    172: "close",
    173: "createAttribute",
    174: "createAttributeNS",
    175: "createCDATASection",
    176: "createComment",
    177: "createDocumentFragment",
    178: "createElement",
    179: "createElementNS",
    180: "createEvent",
    181: "createExpression",
    182: "createNSResolver",
    183: "createNodeIterator",
    184: "createProcessingInstruction",
    185: "createRange",
    186: "createTextNode",
    187: "createTreeWalker",
    188: "elementFromPoint",
    189: "elementsFromPoint",
    190: "evaluate",
    191: "execCommand",
    192: "exitFullscreen",
    193: "exitPointerLock",
    194: "getElementById",
    195: "getElementsByClassName",
    196: "getElementsByName",
    197: "getElementsByTagName",
    198: "getElementsByTagNameNS",
    199: "getSelection",
    200: "hasFocus",
    201: "importNode",
    202: "open",
    203: "prepend",
    204: "queryCommandEnabled",
    205: "queryCommandIndeterm",
    206: "queryCommandState",
    207: "queryCommandSupported",
    208: "queryCommandValue",
    209: "querySelector",
    210: "querySelectorAll",
    211: "releaseEvents",
    212: "webkitCancelFullScreen",
    213: "webkitExitFullscreen",
    214: "write",
    215: "writeln",
    216: "fragmentDirective",
    217: "onpointerrawupdate",
    218: "timeline",
    219: "pictureInPictureEnabled",
    220: "pictureInPictureElement",
    221: "hasStorageAccess",
    222: "requestStorageAccess",
    223: "getAnimations",
    224: "exitPictureInPicture",
    225: "replaceChildren",
    226: "nodeType",
    227: "nodeName",
    228: "baseURI",
    229: "isConnected",
    230: "ownerDocument",
    231: "parentNode",
    232: "parentElement",
    233: "childNodes",
    234: "firstChild",
    235: "lastChild",
    236: "previousSibling",
    237: "nextSibling",
    238: "nodeValue",
    239: "textContent",
    240: "ELEMENT_NODE",
    241: "ATTRIBUTE_NODE",
    242: "TEXT_NODE",
    243: "CDATA_SECTION_NODE",
    244: "ENTITY_REFERENCE_NODE",
    245: "ENTITY_NODE",
    246: "PROCESSING_INSTRUCTION_NODE",
    247: "COMMENT_NODE",
    248: "DOCUMENT_NODE",
    249: "DOCUMENT_TYPE_NODE",
    250: "DOCUMENT_FRAGMENT_NODE",
    251: "NOTATION_NODE",
    252: "DOCUMENT_POSITION_DISCONNECTED",
    253: "DOCUMENT_POSITION_PRECEDING",
    254: "DOCUMENT_POSITION_FOLLOWING",
    255: "DOCUMENT_POSITION_CONTAINS",
    256: "DOCUMENT_POSITION_CONTAINED_BY",
    257: "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",
    258: "appendChild",
    259: "cloneNode",
    260: "compareDocumentPosition",
    261: "contains",
    262: "getRootNode",
    263: "hasChildNodes",
    264: "insertBefore",
    265: "isDefaultNamespace",
    266: "isEqualNode",
    267: "isSameNode",
    268: "lookupNamespaceURI",
    269: "lookupPrefix",
    270: "normalize",
    271: "removeChild",
    272: "replaceChild",
    273: "addEventListener",
    274: "dispatchEvent",
    275: "removeEventListener",
    276: "__defineGetter__",
    277: "__defineSetter__",
    278: "hasOwnProperty",
    279: "__lookupGetter__",
    280: "__lookupSetter__",
    281: "isPrototypeOf",
    282: "propertyIsEnumerable",
    283: "toString",
    284: "valueOf",
    285: "__proto__",
    286: "toLocaleString"
};

const DocumentJSON = {
    "location": "[object]",
    "constructor": "[function]",
    "implementation": "[object]",
    "URL": "[string]",
    "documentURI": "[string]",
    "compatMode": "[string]",
    "characterSet": "[string]",
    "charset": "[string]",
    "inputEncoding": "[string]",
    "contentType": "[string]",
    "doctype": "[object]",
    "documentElement": "[object]",
    "xmlEncoding": "[object]",
    "xmlVersion": "[object]",
    "xmlStandalone": "[boolean]",
    "domain": "[string]",
    "referrer": "[string]",
    "cookie": "[string]",
    "lastModified": "[string]",
    "readyState": "[string]",
    "title": "[string]",
    "dir": "[string]",
    "body": "[object]",
    "head": "[object]",
    "images": "[object]",
    "embeds": "[object]",
    "plugins": "[object]",
    "links": "[object]",
    "forms": "[object]",
    "scripts": "[object]",
    "currentScript": "[object]",
    "defaultView": "[object]",
    "designMode": "[string]",
    "onreadystatechange": "[object]",
    "anchors": "[object]",
    "applets": "[object]",
    "fgColor": "[string]",
    "linkColor": "[string]",
    "vlinkColor": "[string]",
    "alinkColor": "[string]",
    "bgColor": "[string]",
    "all": "[undefined]",
    "scrollingElement": "[object]",
    "onpointerlockchange": "[object]",
    "onpointerlockerror": "[object]",
    "hidden": "[boolean]",
    "visibilityState": "[string]",
    "wasDiscarded": "[boolean]",
    "featurePolicy": "[object]",
    "webkitVisibilityState": "[string]",
    "webkitHidden": "[boolean]",
    "onbeforecopy": "[object]",
    "onbeforecut": "[object]",
    "onbeforepaste": "[object]",
    "onfreeze": "[object]",
    "onresume": "[object]",
    "onsearch": "[object]",
    "onsecuritypolicyviolation": "[object]",
    "onvisibilitychange": "[object]",
    "fullscreenEnabled": "[boolean]",
    "fullscreen": "[boolean]",
    "onfullscreenchange": "[object]",
    "onfullscreenerror": "[object]",
    "webkitIsFullScreen": "[boolean]",
    "webkitCurrentFullScreenElement": "[object]",
    "webkitFullscreenEnabled": "[boolean]",
    "webkitFullscreenElement": "[object]",
    "onwebkitfullscreenchange": "[object]",
    "onwebkitfullscreenerror": "[object]",
    "rootElement": "[object]",
    "onabort": "[object]",
    "onblur": "[object]",
    "oncancel": "[object]",
    "oncanplay": "[object]",
    "oncanplaythrough": "[object]",
    "onchange": "[object]",
    "onclick": "[object]",
    "onclose": "[object]",
    "oncontextmenu": "[object]",
    "oncuechange": "[object]",
    "ondblclick": "[object]",
    "ondrag": "[object]",
    "ondragend": "[object]",
    "ondragenter": "[object]",
    "ondragleave": "[object]",
    "ondragover": "[object]",
    "ondragstart": "[object]",
    "ondrop": "[object]",
    "ondurationchange": "[object]",
    "onemptied": "[object]",
    "onended": "[object]",
    "onerror": "[object]",
    "onfocus": "[object]",
    "onformdata": "[object]",
    "oninput": "[object]",
    "oninvalid": "[object]",
    "onkeydown": "[object]",
    "onkeypress": "[object]",
    "onkeyup": "[object]",
    "onload": "[object]",
    "onloadeddata": "[object]",
    "onloadedmetadata": "[object]",
    "onloadstart": "[object]",
    "onmousedown": "[object]",
    "onmouseenter": "[object]",
    "onmouseleave": "[object]",
    "onmousemove": "[object]",
    "onmouseout": "[object]",
    "onmouseover": "[object]",
    "onmouseup": "[object]",
    "onmousewheel": "[object]",
    "onpause": "[object]",
    "onplay": "[object]",
    "onplaying": "[object]",
    "onprogress": "[object]",
    "onratechange": "[object]",
    "onreset": "[object]",
    "onresize": "[object]",
    "onscroll": "[object]",
    "onseeked": "[object]",
    "onseeking": "[object]",
    "onselect": "[object]",
    "onstalled": "[object]",
    "onsubmit": "[object]",
    "onsuspend": "[object]",
    "ontimeupdate": "[object]",
    "ontoggle": "[object]",
    "onvolumechange": "[object]",
    "onwaiting": "[object]",
    "onwebkitanimationend": "[object]",
    "onwebkitanimationiteration": "[object]",
    "onwebkitanimationstart": "[object]",
    "onwebkittransitionend": "[object]",
    "onwheel": "[object]",
    "onauxclick": "[object]",
    "ongotpointercapture": "[object]",
    "onlostpointercapture": "[object]",
    "onpointerdown": "[object]",
    "onpointermove": "[object]",
    "onpointerup": "[object]",
    "onpointercancel": "[object]",
    "onpointerover": "[object]",
    "onpointerout": "[object]",
    "onpointerenter": "[object]",
    "onpointerleave": "[object]",
    "onselectstart": "[object]",
    "onselectionchange": "[object]",
    "onanimationend": "[object]",
    "onanimationiteration": "[object]",
    "onanimationstart": "[object]",
    "ontransitionrun": "[object]",
    "ontransitionstart": "[object]",
    "ontransitionend": "[object]",
    "ontransitioncancel": "[object]",
    "oncopy": "[object]",
    "oncut": "[object]",
    "onpaste": "[object]",
    "children": "[object]",
    "firstElementChild": "[object]",
    "lastElementChild": "[object]",
    "childElementCount": "[number]",
    "activeElement": "[object]",
    "styleSheets": "[object]",
    "pointerLockElement": "[object]",
    "fullscreenElement": "[object]",
    "adoptedStyleSheets": "[object]",
    "fonts": "[object]",
    "adoptNode": "[function]",
    "append": "[function]",
    "captureEvents": "[function]",
    "caretRangeFromPoint": "[function]",
    "clear": "[function]",
    "close": "[function]",
    "createAttribute": "[function]",
    "createAttributeNS": "[function]",
    "createCDATASection": "[function]",
    "createComment": "[function]",
    "createDocumentFragment": "[function]",
    "createElement": "[function]",
    "createElementNS": "[function]",
    "createEvent": "[function]",
    "createExpression": "[function]",
    "createNSResolver": "[function]",
    "createNodeIterator": "[function]",
    "createProcessingInstruction": "[function]",
    "createRange": "[function]",
    "createTextNode": "[function]",
    "createTreeWalker": "[function]",
    "elementFromPoint": "[function]",
    "elementsFromPoint": "[function]",
    "evaluate": "[function]",
    "execCommand": "[function]",
    "exitFullscreen": "[function]",
    "exitPointerLock": "[function]",
    "getElementById": "[function]",
    "getElementsByClassName": "[function]",
    "getElementsByName": "[function]",
    "getElementsByTagName": "[function]",
    "getElementsByTagNameNS": "[function]",
    "getSelection": "[function]",
    "hasFocus": "[function]",
    "importNode": "[function]",
    "open": "[function]",
    "prepend": "[function]",
    "queryCommandEnabled": "[function]",
    "queryCommandIndeterm": "[function]",
    "queryCommandState": "[function]",
    "queryCommandSupported": "[function]",
    "queryCommandValue": "[function]",
    "querySelector": "[function]",
    "querySelectorAll": "[function]",
    "releaseEvents": "[function]",
    "webkitCancelFullScreen": "[function]",
    "webkitExitFullscreen": "[function]",
    "write": "[function]",
    "writeln": "[function]",
    "fragmentDirective": "[object]",
    "onpointerrawupdate": "[object]",
    "timeline": "[object]",
    "pictureInPictureEnabled": "[boolean]",
    "pictureInPictureElement": "[object]",
    "hasStorageAccess": "[function]",
    "requestStorageAccess": "[function]",
    "getAnimations": "[function]",
    "exitPictureInPicture": "[function]",
    "replaceChildren": "[function]",
    "nodeType": "[number]",
    "nodeName": "[string]",
    "baseURI": "[string]",
    "isConnected": "[boolean]",
    "ownerDocument": "[object]",
    "parentNode": "[object]",
    "parentElement": "[object]",
    "childNodes": "[object]",
    "firstChild": "[object]",
    "lastChild": "[object]",
    "previousSibling": "[object]",
    "nextSibling": "[object]",
    "nodeValue": "[object]",
    "textContent": "[object]",
    "ELEMENT_NODE": "[number]",
    "ATTRIBUTE_NODE": "[number]",
    "TEXT_NODE": "[number]",
    "CDATA_SECTION_NODE": "[number]",
    "ENTITY_REFERENCE_NODE": "[number]",
    "ENTITY_NODE": "[number]",
    "PROCESSING_INSTRUCTION_NODE": "[number]",
    "COMMENT_NODE": "[number]",
    "DOCUMENT_NODE": "[number]",
    "DOCUMENT_TYPE_NODE": "[number]",
    "DOCUMENT_FRAGMENT_NODE": "[number]",
    "NOTATION_NODE": "[number]",
    "DOCUMENT_POSITION_DISCONNECTED": "[number]",
    "DOCUMENT_POSITION_PRECEDING": "[number]",
    "DOCUMENT_POSITION_FOLLOWING": "[number]",
    "DOCUMENT_POSITION_CONTAINS": "[number]",
    "DOCUMENT_POSITION_CONTAINED_BY": "[number]",
    "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC": "[number]",
    "appendChild": "[function]",
    "cloneNode": "[function]",
    "compareDocumentPosition": "[function]",
    "contains": "[function]",
    "getRootNode": "[function]",
    "hasChildNodes": "[function]",
    "insertBefore": "[function]",
    "isDefaultNamespace": "[function]",
    "isEqualNode": "[function]",
    "isSameNode": "[function]",
    "lookupNamespaceURI": "[function]",
    "lookupPrefix": "[function]",
    "normalize": "[function]",
    "removeChild": "[function]",
    "replaceChild": "[function]",
    "addEventListener": "[function]",
    "dispatchEvent": "[function]",
    "removeEventListener": "[function]",
    "__defineGetter__": "[function]",
    "__defineSetter__": "[function]",
    "hasOwnProperty": "[function]",
    "__lookupGetter__": "[function]",
    "__lookupSetter__": "[function]",
    "isPrototypeOf": "[function]",
    "propertyIsEnumerable": "[function]",
    "toString": "[function]",
    "valueOf": "[function]",
    "toLocaleString": "[function]"
};