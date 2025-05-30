// nextui-theme-generator-main/src/components/showcase/mihomoAppContent.ts

// 仅保留 settings 内容的导入
import mihomoMainContent from './mihomoMainContent';

const mihomoAppHtmlContent = `
    <div class="w-full h-full flex">
      <!-- Sider (left panel) -->
      <div id="mihomo-sider" style="width: 250px;" class="side h-full overflow-y-auto no-scrollbar">
        <div class="app-drag sticky top-0 z-40 backdrop-blur bg-transparent h-[49px]">
          <div class="flex justify-between p-2">
            <div class="flex ml-1 color-primary">
              <svg class="icon h-[32px] leading-[32px] text-lg mx-[1px] mihomoicon" viewBox="0 0 76.14 72.14">
                <path d="m38.2,35.17c-2.73,0-5.58.46-8.54,1.4-.36.12-.75.03-1.04-.23l-11.79-10.76c-.66-.6-1.69-.55-2.29.11-.27.3-.42.69-.42,1.09v25.51c0,.95-.48,1.42-1.43,1.42-3.49,0-7.45-.69-11.89-2.06-.27-.09-.46-.34-.46-.63V1.45c0-.48.24-.74.72-.78L9.19,0c.23-.02.46.06.63.21l22.99,20.97c.37.33.87.48,1.35.39,1.55-.28,2.9-.42,4.05-.42s2.5.14,4.05.43c.49.09.99-.05,1.36-.39L66.64.26c.17-.15.4-.23.63-.21l8.13.68c.48.04.72.3.72.78l-.09,49.57c0,.29-.19.54-.46.63-4.44,1.36-8.4,2.04-11.89,2.04-.95,0-1.43-.47-1.43-1.42l.05-25.51c0-.89-.72-1.62-1.62-1.62-.4,0-.79.15-1.09.42l-11.81,10.74c-.29.26-.68.34-1.04.22-2.96-.94-5.81-1.41-8.54-1.41Z"></path>
                <path d="m38.6,54.9c.94.02,1.42.03,1.43.03.73.04,1.3.66,1.27,1.38,0,.19-.06.37-.15.54-.57,1.07-1.11,2.04-1.64,2.91-.11.18-.25.3-.42.37s-.38.1-.61.09c-.23,0-.43-.04-.6-.12-.17-.07-.3-.2-.4-.38-.49-.89-1-1.88-1.52-2.98-.31-.65-.02-1.44.65-1.74.17-.08.36-.12.55-.13.01,0,.49.01,1.44.03Z"></path>
                <rect x="0" y="57" width="21.12" height="2.7" rx=".9" ry=".9"></rect>
                <rect x="55.81" y="57" width="20.28" height="2.7" rx=".9" ry=".9"></rect>
                <rect x="-.29" y="66.23" width="21.96" height="2.8" rx=".9" ry=".9" transform="translate(-21.33 7.11) rotate(-18.9)"></rect>
                <rect x="64.5" y="56.89" width="2.82" height="21.4" rx=".9" ry=".9" transform="translate(-19.39 108.06) rotate(-71.1)"></rect>
              </svg>
              <h3 class="text-lg font-bold text-primary">Mihomo Party</h3>
            </div>
            <button class="button size-sm" disabled>v1.1.1</button>
            <button class="button size-sm isIconOnly  variant-solid">
              <span class="icon">
                <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="mt-2 mx-2">
          <div class="tabs-list bg-content1 shadow-medium outbound-mode-card">
            <!-- Simplified tabs, no longer clickable to switch content -->
            <button class="selected font-bold">Rule</button>
            <button>Global</button>
            <button>Direct</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 m-2">
          <!-- SysproxySwitcher (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 sysproxy-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground">
                    <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg>
                  </span>
                </button>
                <div class="switch-wrapper size-sm is-checked">
                  <div class="switch-thumb size-sm" style="transform: translateX(14px);"></div>
                </div>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Sys Proxy]</h3>
            </div>
          </div>

          <!-- TunSwitcher (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 tun-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground">
                    <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg>
                  </span>
                </button>
                <div class="switch-wrapper size-sm">
                  <div class="switch-thumb size-sm" style="transform: translateX(0px);"></div>
                </div>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[TUN]</h3>
            </div>
          </div>

          <!-- ProfileCard (col-span-2) -->
          <div class="col-span-2 card hover:bg-primary/30 profile-card">
            <div class="card-body pb-1">
              <div class="flex justify-between h-[32px]">
                <h3 class="text-ellipsis whitespace-nowrap overflow-hidden text-md font-bold leading-[32px] text-foreground">
                  [Current Profile Name]
                </h3>
                <div class="flex">
                  <button class="button isIconOnly size-sm variant-light color-default">
                    <span class="icon text-foreground">
                      <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg>
                    </span>
                  </button>
                  <button class="button isIconOnly size-sm variant-light color-default">
                    <span class="icon text-foreground animate-spin">
                      <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div class="mt-2 flex justify-between text-foreground">
                <small>[Traffic Used] / [Traffic Total]</small>
                <button class="button size-sm variant-light h-[20px] p-1 m-0 text-foreground">
                  [Expire Date]
                </button>
              </div>
            </div>
            <div class="card-footer pt-0">
              <div class="progress w-full">
                <div class="progress-indicator bg-foreground" style="width: 70%;"></div>
              </div>
            </div>
          </div>

          <!-- ProxyCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 proxy-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground">
                    <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg>
                  </span>
                </button>
                <span class="chip size-sm variant-bordered mr-2 mt-2">
                  999
                </span>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[ProxyGrp]</h3>
            </div>
          </div>

          <!-- RuleCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 rule-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                </button>
                <span class="chip size-sm variant-bordered mr-2 mt-2">
                  999
                </span>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Rules]</h3>
            </div>
          </div>

          <!-- ResourceCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 resource-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground">
                    <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg>
                  </span>
                </button>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Ext. Res.]</h3>
            </div>
          </div>

          <!-- OverrideCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 override-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground">
                    <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg>
                  </span>
                </button>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Override]</h3>
            </div>
          </div>

          <!-- ConnCard (col-span-2) -->
          <div class="col-span-2 card hover:bg-primary/30 conn-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                </button>
                <div class="p-2 w-full text-foreground">
                  <div class="flex justify-between">
                    <div class="w-full text-right mr-2">[Upload Speed]/s</div>
                    <span class="icon">↑</span>
                  </div>
                  <div class="flex justify-between">
                    <div class="w-full text-right mr-2">[Download Speed]/s</div>
                    <span class="icon">↓</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Connections]</h3>
            </div>
          </div>

          <!-- MihomoCoreCard (col-span-2) -->
          <div class="col-span-2 card hover:bg-primary/30 mihomo-core-card">
            <div class="card-body">
              <div class="flex justify-between h-[32px]">
                <h3 class="text-md font-bold leading-[32px] text-foreground">
                  [Core Version]
                </h3>
                <button class="button isIconOnly size-sm variant-light color-default">
                  <span class="icon text-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                </button>
              </div>
            </div>
            <div class="card-footer pt-1">
              <div class="flex justify-between w-full text-md font-bold text-foreground">
                <h4>[Core Settings]</h4>
                <h4>[Memory Usage]</h4>
              </div>
            </div>
          </div>

          <!-- DNSCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 dns-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                </button>
                <div class="switch-wrapper size-sm is-checked">
                  <div class="switch-thumb size-sm" style="transform: translateX(14px);"></div>
                </div>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[DNS]</h3>
            </div>
          </div>

          <!-- SniffCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 sniff-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                </button>
                <div class="switch-wrapper size-sm is-checked">
                  <div class="switch-thumb size-sm" style="transform: translateX(14px);"></div>
                </div>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Sniffing]</h3>
            </div>
          </div>

          <!-- LogCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 log-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <span class="icon text-foreground"<svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                </button>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Logs]</h3>
            </div>
          </div>

          <!-- SubStoreCard (col-span-1) -->
          <div class="col-span-1 card hover:bg-primary/30 substore-card">
            <div class="card-body pb-1 pt-0 px-0">
              <div class="flex justify-between">
                <button class="button isIconOnly bg-transparent pointer-events-none variant-flat color-default">
                  <svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="card-footer pt-1">
              <h3 class="text-md font-bold text-foreground">[Sub-Store]</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="mihomo-main-content" class="main grow h-full overflow-y-auto relative">
        <!-- Only include settings content -->
        ${mihomoMainContent}
      </div>
    </div>
`;

export default mihomoAppHtmlContent;