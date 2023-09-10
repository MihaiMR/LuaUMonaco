define(['require','exports'],(require,exports)=>{Object.defineProperty(exports,'__esModule',{value:true});exports['autocompletes']={"Method":{"BindAction":{"insertText":"BindAction(${1:actionName}, ${2:functionToBind}, ${3:createTouchButton}, ${4:inputTypes})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction)"}},"BindActionAtPriority":{"insertText":"BindActionAtPriority(${1:actionName}, ${2:functionToBind}, ${3:createTouchButton}, ${4:priorityLevel}, ${5:inputTypes})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindActionAtPriority)"}},"BindActivate":{"insertText":"BindActivate(${1:userInputTypeForActivation}, ${2:keyCodesForActivation})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindActivate)"}},"BindCoreAction":{"insertText":"BindCoreAction(${1:actionName}, ${2:functionToBind}, ${3:createTouchButton}, ${4:inputTypes})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindCoreAction)"}},"BindCoreActionAtPriority":{"insertText":"BindCoreActionAtPriority(${1:actionName}, ${2:functionToBind}, ${3:createTouchButton}, ${4:priorityLevel}, ${5:inputTypes})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindCoreActionAtPriority)"}},"BindCoreActivate":{"insertText":"BindCoreActivate(${1:userInputTypeForActivation}, ${2:keyCodesForActivation})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindCoreActivate)"}},"CallFunction":{"insertText":"CallFunction(${1:actionName}, ${2:state}, ${3:inputObject})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#CallFunction)"}},"FireActionButtonFoundSignal":{"insertText":"FireActionButtonFoundSignal(${1:actionName}, ${2:actionButton})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#FireActionButtonFoundSignal)"}},"GetAllBoundActionInfo":{"insertText":"GetAllBoundActionInfo()","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetAllBoundActionInfo)"}},"GetAllBoundCoreActionInfo":{"insertText":"GetAllBoundCoreActionInfo()","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetAllBoundCoreActionInfo)"}},"GetBoundActionInfo":{"insertText":"GetBoundActionInfo(${1:actionName})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetBoundActionInfo)"}},"GetBoundCoreActionInfo":{"insertText":"GetBoundCoreActionInfo(${1:actionName})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetBoundCoreActionInfo)"}},"GetCurrentLocalToolIcon":{"insertText":"GetCurrentLocalToolIcon()","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetCurrentLocalToolIcon)"}},"SetDescription":{"insertText":"SetDescription(${1:actionName}, ${2:description})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#SetDescription)"}},"SetImage":{"insertText":"SetImage(${1:actionName}, ${2:image})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#SetImage)"}},"SetPosition":{"insertText":"SetPosition(${1:actionName}, ${2:position})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#SetPosition)"}},"SetTitle":{"insertText":"SetTitle(${1:actionName}, ${2:title})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#SetTitle)"}},"UnbindAction":{"insertText":"UnbindAction(${1:actionName})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAction)"}},"UnbindActivate":{"insertText":"UnbindActivate(${1:userInputTypeForActivation}, ${2:keyCodeForActivation})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindActivate)"}},"UnbindAllActions":{"insertText":"UnbindAllActions()","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAllActions)"}},"UnbindCoreAction":{"insertText":"UnbindCoreAction(${1:actionName})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindCoreAction)"}},"UnbindCoreActivate":{"insertText":"UnbindCoreActivate(${1:userInputTypeForActivation}, ${2:keyCodeForActivation})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindCoreActivate)"}},"GetButton":{"insertText":"GetButton(${1:actionName})","documentation":{"value":"[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetButton)"}}},"Enum":{},"Field":{},"Event":{"BoundActionAdded":{"label":{"name":"BoundActionAdded","type":"(RBXScriptSignal)"},"documentation":{"value":"```lua\nBoundActionAdded:Connect(function(actionAdded, createTouchButton, functionInfoTable, isCore)\n\t-- Code\nend)\n```\n[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BoundActionAdded)"},"__children__":{},"__using__":["classes/RBXScriptSignal"]},"BoundActionChanged":{"label":{"name":"BoundActionChanged","type":"(RBXScriptSignal)"},"documentation":{"value":"```lua\nBoundActionChanged:Connect(function(actionChanged, changeName, changeTable)\n\t-- Code\nend)\n```\n[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BoundActionChanged)"},"__children__":{},"__using__":["classes/RBXScriptSignal"]},"BoundActionRemoved":{"label":{"name":"BoundActionRemoved","type":"(RBXScriptSignal)"},"documentation":{"value":"```lua\nBoundActionRemoved:Connect(function(actionRemoved, functionInfoTable, isCore)\n\t-- Code\nend)\n```\n[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BoundActionRemoved)"},"__children__":{},"__using__":["classes/RBXScriptSignal"]},"GetActionButtonEvent":{"label":{"name":"GetActionButtonEvent","type":"(RBXScriptSignal)"},"documentation":{"value":"```lua\nGetActionButtonEvent:Connect(function(actionName)\n\t-- Code\nend)\n```\n[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetActionButtonEvent)"},"__children__":{},"__using__":["classes/RBXScriptSignal"]},"LocalToolEquipped":{"label":{"name":"LocalToolEquipped","type":"(RBXScriptSignal)"},"documentation":{"value":"```lua\nLocalToolEquipped:Connect(function(toolEquipped)\n\t-- Code\nend)\n```\n[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#LocalToolEquipped)"},"__children__":{},"__using__":["classes/RBXScriptSignal"]},"LocalToolUnequipped":{"label":{"name":"LocalToolUnequipped","type":"(RBXScriptSignal)"},"documentation":{"value":"```lua\nLocalToolUnequipped:Connect(function(toolUnequipped)\n\t-- Code\nend)\n```\n[View documentation](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#LocalToolUnequipped)"},"__children__":{},"__using__":["classes/RBXScriptSignal"]}}};});