const mihomoBaseCssContent = `

html {
    --heroui-background: 0 0% 100%; /* White */
    --heroui-foreground: 0 0% 10%;   /* Dark Gray */
    --heroui-content1: 0 0% 98%;     /* Light Gray */
    --heroui-content2: 0 0% 95%;     /* Slightly darker light gray */
    --heroui-primary: 220 80% 50%;   /* Blue */
    --heroui-primary-foreground: 0 0% 100%; /* White */
    --heroui-default-200: 0 0% 90%;  /* Default light gray */
    --heroui-default-500: 0 0% 50%;  /* Default gray */
    --heroui-divider: 0 0% 85%;      /* Divider color */
    --heroui-warning: 40 80% 50%;    /* Orange */
    --heroui-danger: 0 80% 50%;      /* Red */
    --heroui-success: 120 80% 30%;   /* Green */
    --heroui-secondary: 260 80% 40%; /* Purple */
}

html.dark {
    --heroui-background: 240 10% 3%;   /* Darkest Gray */
    --heroui-foreground: 210 10% 80%;  /* Light Gray */
    --heroui-content1: 240 10% 8%;     /* Dark Gray */
    --heroui-content2: 240 10% 12%;    /* Slightly lighter dark gray */
    --heroui-primary: 220 80% 50%;     /* Blue */
    --heroui-primary-foreground: 0 0% 100%; /* White */
    --heroui-default-200: 240 10% 20%; /* Default dark gray */
    --heroui-default-500: 240 10% 50%; /* Default gray */
    --heroui-divider: 240 10% 15%;     /* Divider color */
    --heroui-warning: 40 80% 50%;    /* Orange */
    --heroui-danger: 0 80% 50%;      /* Red */
    --heroui-success: 120 80% 30%;   /* Green */
    --heroui-secondary: 260 80% 40%; /* Purple */
}
.text-lg{
    font-size: 1.0rem; /* 18px */
    line-height: 1.5rem; /* 28px */
}
    .mihomoicon{
    fill: hsl(var(--heroui-primary));
    }
/* Utility classes (simplified Tailwind) - REMOVED ALL DUPLICATES */
/* Example: .w-full, .h-full, .flex, .p-2, .text-lg, .font-bold etc. */
/* These will be provided by the main nextui-theme-generator's Tailwind */

/* Custom app styles (from main.css and floating.css) */
/* These are unique to Mihomo UI and don't clash with standard Tailwind */
.app-nodrag { -webkit-app-region: none; }
.app-drag { -webkit-app-region: drag; }
* { user-select: none; }
*:focus { outline: none; }
.flag-emoji { /* Placeholder for flag emojis */ }
.no-scrollbar::-webkit-scrollbar { display: none; }
*::-webkit-scrollbar { width: 8px; height: 8px; }
*::-webkit-scrollbar-corner { background-color: transparent; }
.markdown-body a { color: hsl(var(--heroui-primary)); text-decoration: underline; }
.markdown-body h3 { font-size: 1.125rem; font-weight: 700; }
.markdown-body li { list-style: disc; margin-left: 1.25rem; }

/* Component specific styles (minimal simulation) */
/* These are the structural/visual styles specific to Mihomo UI components */
.side {
    background-color: hsl(var(--heroui-background));
    flex-shrink: 0;
    border-right: 1px solid hsl(var(--heroui-divider));
}
.main {
    flex-grow: 1;
    background-color: hsl(var(--heroui-background));
}

.floating-bg { border-radius: 9999px; background-color: hsl(var(--heroui-content1)); }
.floating-thumb { border-radius: 9999px; }
.floating-icon { display: flex; align-items: center; justify-content: center; height: 100%; }

.outbound-mode-card button {
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    background-color: hsl(var(--heroui-content1));
    color: hsl(var(--heroui-foreground));
    border: none;
    transition: background-color 0.2s ease-in-out;
}
.outbound-mode-card button:hover {
    background-color: hsla(var(--heroui-primary), 0.3);
}
.outbound-mode-card button.selected {
    background-color: hsl(var(--heroui-primary));
    color: hsl(var(--heroui-primary-foreground));
}
.outbound-mode-card button.font-bold { font-weight: 700; }

/* Card simulation */
.card {
    background-color: hsl(var(--heroui-content1));
    border-radius: 0.875rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.card.isPressable:hover {
    background-color: hsla(var(--heroui-primary), 0.3);
}
.card.bg-primary { background-color: hsl(var(--heroui-primary)); }
.card.bg-primary .text-primary-foreground { color: hsl(var(--heroui-primary-foreground)); }
.card.bg-primary .text-foreground { color: hsl(var(--heroui-primary-foreground)); }
.card.bg-primary .border-primary { border-color: hsl(var(--heroui-primary-foreground)); }
.card.bg-primary .chip.variant-bordered { border-color: hsl(var(--heroui-primary-foreground)); color: hsl(var(--heroui-primary-foreground)); }
.card.blur-sm { filter: blur(2px); }
.card.scale-\[0\.97\] { transform: scale(0.97); }

/* Button simulation */
.button {
    background-color: hsl(var(--heroui-default-200));
    color: hsl(var(--heroui-foreground));
    border: none;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease-in-out;
    height: 32px;
}
.button.isIconOnly {
    width: 32px;
    padding: 0;
}
.button.size-sm {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    height: 28px;
    min-width: 28px;
}
.button.size-md {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    height: 36px;
    min-width: 36px;
}

.button.color-primary { background-color: hsl(var(--heroui-primary)); color: hsl(var(--heroui-primary-foreground)); }
.button.color-danger { background-color: hsl(var(--heroui-danger)); color: hsl(var(--heroui-primary-foreground)); }
.button.color-warning { background-color: hsl(var(--heroui-warning)); color: hsl(var(--heroui-primary-foreground)); }
.button.variant-light { background-color: transparent; }
.button.variant-light:hover { background-color: hsl(var(--heroui-default-200)); }
.button.variant-solid { background-color: hsl(var(--heroui-primary)); color: hsl(var(--heroui-primary-foreground)); }
.button.variant-bordered { background-color: transparent; border: 1px solid hsl(var(--heroui-primary)); color: hsl(var(--heroui-primary)); }
.button.variant-flat { background-color: hsla(var(--heroui-primary), 0.1); color: hsl(var(--heroui-primary)); }
.button.color-default {  color: hsl(var(--heroui-foreground)); }
.button.color-default.variant-light { background-color: transparent; color: hsl(var(--heroui-foreground)); }
.button.color-default.variant-light:hover { background-color: hsl(var(--heroui-default-200)); }


.button.fullWidth { width: 100%; }
.button.disabled { opacity: 0.6; cursor: not-allowed; }

/* Input simulation */
.input-wrapper {
    background-color: hsl(var(--heroui-default-100));
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    border: 1px solid transparent;
}
.input-wrapper input {
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    flex-grow: 1;
    padding: 0;
}
.input-wrapper:focus-within {
    border-color: hsl(var(--heroui-primary));
}
.input-wrapper.size-sm { padding: 0.3rem 0.5rem; }
.input-wrapper.w-\[60\%\] { width: 60%; }
.input-wrapper.w-\[100px\] { width: 100px; }
.input-wrapper.w-\[150px\] { width: 150px; }
.input-wrapper.w-\[180px\] { width: 180px; }
.input-wrapper.w-\[200px\] { width: 200px; }
.input-wrapper.w-\[400px\] { width: 400px; }
.input-wrapper.min-w-\[131px\] { min-width: 131px; }

/* Switch simulation */
.switch-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 40px;
    height: 24px;
    background-color: hsl(var(--heroui-default-200));
    border-radius: 9999px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}
.switch-wrapper.size-sm {
    width: 32px;
    height: 18px;
}
.switch-wrapper.is-checked {
    background-color: hsl(var(--heroui-primary));
}
.switch-thumb {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 9999px;
    transition: transform 0.2s ease-in-out;
}
.switch-thumb.size-sm {
    width: 12px;
    height: 12px;
}
.switch-wrapper.is-checked .switch-thumb {
    transform: translateX(16px);
}
.switch-wrapper.size-sm.is-checked .switch-thumb {
    transform: translateX(14px);
}

/* Tab/Tabs simulation */
.tabs-list {
    display: flex;
    background-color: hsl(var(--heroui-content1));
    border-radius: 0.5rem;
    overflow: hidden;
}
.tabs-list button {
    flex-grow: 1;
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    color: hsl(var(--heroui-foreground));
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s ease-in-out;
}
.tabs-list button.selected {
    background-color: hsl(var(--heroui-primary));
    color: hsl(var(--heroui-primary-foreground));
}
.tabs-list.variant-underlined {
    background-color: transparent;
    border-radius: 0;
}
.tabs-list.variant-underlined button.selected {
    background-color: transparent;
    border-bottom: 2px solid hsl(var(--heroui-primary));
}
.tabs-list.color-primary button.selected {
    border-color: hsl(var(--heroui-primary));
    border-bottom: 2px solid hsl(var(--heroui-primary));
    }

.tabs-list.color-danger button.selected {
    background-color: hsl(var(--heroui-danger));
    color: hsl(var(--heroui-primary-foreground));
}
.tabs-list  button{
min-width:3em;
}
.tabs-list  button span{
font-size: 0.85em;
}
/* Chip simulation */
.chip {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    line-height: 1rem;
    background-color: hsl(var(--heroui-default-200));
    color: hsl(var(--heroui-foreground));
}
.chip.size-sm {
    font-size: 0.625rem;
    padding: 0.125rem 0.375rem;
}
.chip.variant-dot {
    position: relative;
    padding-left: 0.875rem;
}
.chip.variant-dot::before {
    content: '';
    position: absolute;
    left: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 9999px;
    background-color: currentColor;
}
.chip.color-primary { background-color: hsla(var(--heroui-primary), 0.15); color: hsl(var(--heroui-primary)); }
.chip.color-danger { background-color: hsla(var(--heroui-danger), 0.15); color: hsl(var(--heroui-danger)); }
.chip.variant-bordered { background-color: transparent; border: 1px solid currentColor; }
.chip.border-primary { border-color: hsl(var(--heroui-primary)); }
.chip.text-primary { color: hsl(var(--heroui-primary)); }
.proxy-item-card{
    background-color: hsl(var(--heroui-content2));}
    .proxy-item-card.selected{
    background-color: hsl(var(--heroui-content1));}

/* Divider simulation */
.divider {
    height: 1px;
    width: 100%;
    background-color: hsl(var(--heroui-divider));
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.divider.orientation-vertical {
    width: 1px;
    height: 100%;
    margin: 0;
}

/* Progress Bar (simplified) */
.progress {
    width: 100%;
    height: 8px;
    background-color: hsl(var(--heroui-default-200));
    border-radius: 9999px;
    overflow: hidden;
}
.progress-indicator {
    height: 100%;
    background-color: hsl(var(--heroui-foreground));
    border-radius: 9999px;
    width: var(--progress-value, 0%);
}
.progress-indicator.bg-primary-foreground { background-color: hsl(var(--heroui-primary-foreground)); }

/* Misc. */
.backdrop-blur { backdrop-filter: blur(8px); background-color: hsla(var(--heroui-background), 0.7); }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #c0c1c550; border-radius: 5px; }
.dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #c0c1c550; }
.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #c0c1c58f; }

/* Specific overrides to adjust spacing/sizing for static preview */
/* These are specific to Mihomo UI's modals if they were ever used,
   but might not be relevant if not used or custom modals are present. */
.modal-content {
    background-color: hsl(var(--heroui-content1));
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    width: 400px;
}
.modal-header { font-weight: 700; font-size: 1.25rem; margin-bottom: 1rem; }
.modal-body { margin-bottom: 1rem; overflow-y: auto; }
.modal-footer { display: flex; justify-content: flex-end; gap: 0.5rem; }
.modal-content.size-xl { width: 80%; max-width: 1200px; }
.modal-content.size-5xl { width: 90%; max-width: 1600px; }
.modal-content.h-full { height: calc(100% - 100px); }
.modal-content.w-\[calc\(100\%-100px\)\] { width: calc(100% - 100px); }
.modal-content.break-all { word-break: break-all; }
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
.modal-backdrop.top-\[48px\] { top: 48px; height: calc(100vh - 48px); }

/* Icons (simple placeholder) */
.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }

.animate-spin {
    animation: spin 1s linear infinite;
}
    .mihomo-content {
    /* Ensure content fills its parent and is positionable */
    width: 100%;
    height: 100%;
    overflow-y: auto; /* Allow content to scroll if needed */
    /* Add specific styles to control visibility */
    display: block; /* Default to block for content */
}

.mihomo-content.hidden {
    display: none !important; /* Force hide */
}
.bg-default-100 { 
    /* Change to use --heroui-default-100 instead of --heroui-default-200 */
    background-color: hsl(var(--heroui-default-100)); 
} 
/* Add or ensure the cursor-pointer class is defined if not present in main Tailwind */
.cursor-pointer { cursor: pointer; }
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

export default mihomoBaseCssContent;