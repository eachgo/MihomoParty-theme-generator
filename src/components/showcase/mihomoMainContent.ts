const mihomoMainContent = `
     <div class="w-full h-full">
      <div class="sticky top-0 z-40 h-[49px] w-full bg-background">
        <div class="app-drag p-2 flex justify-between h-[48px]">
          <div class="title h-full text-lg leading-[32px] text-primary">Profiles</div>
          <div class="header flex gap-1 h-full">
            <button class="button size-sm isIconOnly variant-light"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              
              </svg></button>
            <button class="button size-sm isIconOnly variant-light"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              
              </svg></button>
          </div>
        </div>
        <div class="divider"></div>
      </div>
      <div class="content h-[calc(100vh-49px)] overflow-y-auto custom-scrollbar">
        <div class="sticky profiles-sticky top-0 z-40 bg-background">
          <div class="flex p-2">
            <div class="input-wrapper size-sm w-full">
              <input type="text" placeholder="Enter Subscription URL" value="" />
              <button class="button size-sm isIconOnly variant-light"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                
                </svg></button>
              <label class="whitespace-nowrap flex items-center ml-2">
                <input type="checkbox" class="mr-1" /> [Proxy]
              </label>
            </div>
            <button class="button size-sm color-primary ml-2" disabled>Import</button>
            <button class="button size-sm isIconOnly color-primary ml-2"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              
              </svg></button>
            <button class="button size-sm isIconOnly color-primary ml-2"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              
              </svg></button>
          </div>
          <div class="divider"></div>
        </div>
        
        <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-2">
          <!-- Profile Item 1 (Current Profile) -->
          <div class="col-span-1 card bg-primary">
            <div class="card-body pb-1">
              <div class="flex justify-between h-[32px]">
                <h3 class="text-ellipsis whitespace-nowrap overflow-hidden text-md font-bold leading-[32px] text-primary-foreground">
                  My Awesome Profile
                </h3>
                <div class="flex">
                  <button class="button isIconOnly size-sm variant-light color-default">
                    <span class="icon text-primary-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg></span>
                  </button>
                </div>
              </div>
              <div class="mt-2 flex justify-between text-primary-foreground">
                <small>[1.2 GB / 10 GB]</small>
                <button class="button size-sm variant-light h-[20px] p-1 m-0 text-primary-foreground">
                  2024-12-31
                </button>
              </div>
            </div>
            <div class="card-footer pt-0">
              <div class="progress w-full">
                <div class="progress-indicator bg-primary-foreground" style="width: 12%;"></div>
              </div>
            </div>
          </div>

          <!-- Profile Item 2 (Remote Profile) -->
          <div class="col-span-1 card bg-content1">
            <div class="card-body pb-1">
              <div class="flex justify-between h-[32px]">
                <h3 class="text-ellipsis whitespace-nowrap overflow-hidden text-md font-bold leading-[32px] text-foreground">
                  Another Remote Config
                </h3>
                <div class="flex">
                  <button class="button isIconOnly size-sm variant-light color-default">
                    <span class="icon text-foreground animate-spin"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg></span>
                  </button>
                  <button class="button isIconOnly size-sm variant-light color-default">
                    <span class="icon text-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg></span>
                  </button>
                </div>
              </div>
              <div class="mt-2 flex justify-between text-foreground">
                <small>[2.5 GB / Unlimited]</small>
                <button class="button size-sm variant-light h-[20px] p-1 m-0 text-foreground">
                  Last updated: 1s ago
                </button>
              </div>
            </div>
            <div class="card-footer pt-0">
              <div class="progress w-full">
                <div class="progress-indicator bg-foreground" style="width: 50%;"></div>
              </div>
            </div>
          </div>

          <!-- Profile Item 3 (Local Profile) -->
          <div class="col-span-1 card bg-content1">
            <div class="card-body pb-1">
              <div class="flex justify-between h-[32px]">
                <h3 class="text-ellipsis whitespace-nowrap overflow-hidden text-md font-bold leading-[32px] text-foreground">
                  My Local Override
                </h3>
                <div class="flex">
                  <button class="button isIconOnly size-sm variant-light color-default">
                    <span class="icon text-foreground"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      
                      </svg></span>
                  </button>
                </div>
              </div>
              
              <div class="mt-2 flex justify-between text-foreground">
                <span class="chip size-sm variant-bordered border-primary text-primary">Local</span>
              </div>
            </div>
            <div class="card-footer pt-0">
              <!-- No progress bar for local profiles -->
            </div>
          </div>
        
        </div>
        <div class=" overflow-y-auto custom-scrollbar">
        <!-- Proxy Group 1 -->
        <div class="w-full pt-2 px-2">
          <div class="card isPressable fullWidth">
            <div class="card-body w-full">
              <div class="flex justify-between">
                <div class="flex text-ellipsis overflow-hidden whitespace-nowrap">
                  <span class="avatar bg-transparent mr-2 size-sm rounded-sm"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                  <div class="text-ellipsis overflow-hidden whitespace-nowrap">
                    <div class="inline flag-emoji h-[32px] text-md leading-[32px]" title="Proxy Group 1">Proxy Group 1</div>
                    <div class="inline ml-2 text-sm text-foreground-500">SELECT</div>
                    <div class="inline flag-emoji ml-2 text-sm text-foreground-500">Proxy A</div>
                  </div>
                </div>
                <div class="flex">
                  <span class="chip size-sm my-1 mr-2">3</span>
                  <div class="flex">
                    <div class=" size-sm">
                      <input type="text" class="w-0 focus:w-[150px] focus:ml-2 transition-all duration-200" placeholder="Search Proxies" />
                      <div class="cursor-pointer p-2 text-lg text-foreground-500"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        
                        </svg></div>
                    </div>
                  </div>
                  <button class="button variant-light size-sm isIconOnly"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></button>
                  <button class="button variant-light size-sm isIconOnly"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></button>
                  <span class="transition duration-200 ml-2 h-[32px] text-lg text-foreground-500 -rotate-90"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    
                    </svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Proxies for Group 1 (Expanded) -->
        <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2 pt-2 mx-2">
          <div class="col-span-1 proxy-item-card selected">
            <div class="flex flex-col gap-1 p-1">
              <div class="flex justify-between items-center pl-1">
                <div class="text-ellipsis overflow-hidden whitespace-nowrap">
                  <div class="flag-emoji inline" title="Proxy A">Proxy A selected</div>
                </div>
                <button class="button isIconOnly color-danger variant-light h-[20px] p-0 text-sm" title="Unpin"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  
                  </svg></button>
              </div>
              <div class="flex justify-between items-center pl-1">
                <div class="flex gap-1 items-center">
                  <div class="text-foreground-400 text-xs bg-default-100 px-1 rounded-md">VLESS</div>
                  <div class="text-foreground-400 text-xs bg-default-100 px-1 rounded-md">tfo</div>
                </div>
                <button class="button isIconOnly color-success variant-light h-full text-sm ml-auto -mt-0.5 px-2 relative w-min whitespace-nowrap">
                  <div class="w-full h-full flex items-center justify-end">235ms</div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-1 proxy-item-card">
            <div class="flex flex-col gap-1 p-1">
              <div class="flex justify-between items-center pl-1">
                <div class="text-ellipsis overflow-hidden whitespace-nowrap">
                  <div class="flag-emoji inline" title="Proxy B">Proxy B</div>
                </div>
              </div>
              <div class="flex justify-between items-center pl-1">
                <div class="flex gap-1 items-center">
                  <div class="text-foreground-400 text-xs bg-default-100 px-1 rounded-md">SS</div>
                  <div class="text-foreground-400 text-xs bg-default-100 px-1 rounded-md">udp</div>
                </div>
                <button class="button isIconOnly color-warning variant-light h-full text-sm ml-auto -mt-0.5 px-2 relative w-min whitespace-nowrap">
                  <div class="w-full h-full flex items-center justify-end">800ms</div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-1 proxy-item-card">
            <div class="flex flex-col gap-1 p-1">
              <div class="flex justify-between items-center pl-1">
                <div class="text-ellipsis overflow-hidden whitespace-nowrap">
                  <div class="flag-emoji inline" title="Proxy C">Proxy C</div>
                </div>
              </div>
              <div class="flex justify-between items-center pl-1">
                <div class="flex gap-1 items-center">
                  <div class="text-foreground-400 text-xs bg-default-100 px-1 rounded-md">VMESS</div>
                </div>
                <button class="button isIconOnly color-primary variant-light h-full text-sm ml-auto -mt-0.5 px-2 relative w-min whitespace-nowrap">
                  <div class="w-full h-full flex items-center justify-end">Test</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        
            </div>
            <div class="content  overflow-y-auto custom-scrollbar">
        <!-- General Settings Card -->
        <div class="card m-2">
          <div class="card-body">
            <h2 class="text-md font-bold mb-2">General Settings</h2>
            
            <div class="divider my-2"></div>

            <div class="select-text h-[32px] w-full flex justify-between">
              <div class="h-full flex items-center">
                <h4 class="h-full text-md leading-[32px] whitespace-nowrap">Auto Start</h4>
                <div></div>
              </div>
              <div class="switch-wrapper size-sm is-checked">
                <div class="switch-thumb size-sm" style="transform: translateX(14px);"></div>
              </div>
            </div>
            <div class="divider my-2"></div>

            <div class="select-text h-[32px] w-full flex justify-between">
              <div class="h-full flex items-center">
                <h4 class="h-full text-md leading-[32px] whitespace-nowrap">Background Color</h4>
                <div></div>
              </div>
              <div class="tabs-list size-sm color-primary">
                <button>Auto</button>
                <button class="selected">Dark</button>
                <button>Light</button>
              </div>
            </div>
            <div class="divider my-2"></div>

            
          </div>
        </div>
         </div>
         <div class="content  overflow-y-auto custom-scrollbar">
        <div class="overflow-x-auto sticky top-0 z-40 bg-background">
          <div class="flex p-2 gap-2">
            <div class="tabs-list size-sm color-primary variant-underlined w-fit h-[32px]">
              <button class="selected">
                <span class="badge" style="display:inline-flex;position:relative;">
                  <span class="chip color-primary size-sm" style="border-radius:9999px;">999</span>
                  <span class="p-1">Active</span>
                </span>
              </button>
              <button>
                <span class="badge" style="display:inline-flex;position:relative;">
                  <span class="chip color-default size-sm" style="border-radius:9999px;">999</span>
                  <span class="p-1">Closed</span>
                </span>
              </button>
            </div>
            <div class="input-wrapper size-sm">
              <input type="text" placeholder="Filter" value="">
            </div>
            <div class="input-wrapper size-sm w-[180px] min-w-[131px]">
              
                <span class="p-1">time</span>
                
              </select>
            </div>
            <button class="button size-sm isIconOnly bg-content2"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              
              </svg></button>
          </div>
          <div class="divider"></div>
        </div>
        <div class="h-[calc(100vh-100px)] mt-[1px] overflow-y-auto">
          <!-- Connection Item 1 (Active) -->
          <div class="px-2 pb-2 pt-2">
            <div class="relative">
              <div class="card isPressable w-full">
                <div class="w-full pr-12">
                  <div class="card-body pb-0 gap-1">
                    <span class="chip color-primary size-sm variant-dot">HTTP (TCP)</span>
                    <div class="text-ellipsis whitespace-nowrap overflow-hidden">
                      [Process Name] -&gt; [Host Name/IP]
                    </div>
                    <small class="whitespace-nowrap text-foreground-500">[Time Ago]</small>
                  </div>
                  <div class="card-footer pt-2 flex justify-start gap-1 overflow-x-auto no-scrollbar">
                    <span class="chip flag-emoji text-ellipsis whitespace-nowrap overflow-hidden size-sm variant-bordered">
                      [Proxy Chain]
                    </span>
                    <span class="chip size-sm variant-bordered">
                      ↑ [Upload Amount] ↓ [Download Amount]
                    </span>
                    <span class="chip color-primary size-sm variant-bordered">
                      ↑ [Upload Speed]/s ↓ [Download Speed]/s
                    </span>
                  </div>
                </div>
              </div>
              <button class="button color-warning variant-light isIconOnly absolute right-2 top-1/2 -translate-y-1/2"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                
                </svg></button>
            </div>
          </div>
          <!-- Connection Item 2 (Active) -->
          <div class="px-2 pb-2">
            <div class="relative">
              <div class="card isPressable w-full">
                <div class="w-full pr-12">
                  <div class="card-body pb-0 gap-1">
                    <span class="chip color-primary size-sm variant-dot">UDP (UDP)</span>
                    <div class="text-ellipsis whitespace-nowrap overflow-hidden">
                      [Source IP] -&gt; [Destination IP]
                    </div>
                    <small class="whitespace-nowrap text-foreground-500">[Time Ago]</small>
                  </div>
                  <div class="card-footer pt-2 flex justify-start gap-1 overflow-x-auto no-scrollbar">
                    <span class="chip flag-emoji text-ellipsis whitespace-nowrap overflow-hidden size-sm variant-bordered">
                      [Proxy Chain]
                    </span>
                    <span class="chip size-sm variant-bordered">
                      ↑ [Upload Amount] ↓ [Download Amount]
                    </span>
                    <span class="chip color-primary size-sm variant-bordered">
                      ↑ [Upload Speed]/s ↓ [Download Speed]/s
                    </span>
                  </div>
                </div>
              </div>
              <button class="button color-warning variant-light isIconOnly absolute right-2 top-1/2 -translate-y-1/2"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                
                </svg></button>
            </div>
          </div>
          <!-- Connection Item 3 (Closed) -->
          <div class="px-2 pb-2">
            <div class="relative">
              <div class="card isPressable w-full">
                <div class="w-full pr-12">
                  <div class="card-body pb-0 gap-1">
                    <span class="chip color-danger size-sm variant-dot">TCP (TCP)</span>
                    <div class="text-ellipsis whitespace-nowrap overflow-hidden">
                      [Process X] -&gt; [Host Y]
                    </div>
                    <small class="whitespace-nowrap text-foreground-500">[Time Ago]</small>
                  </div>
                  <div class="card-footer pt-2 flex justify-start gap-1 overflow-x-auto no-scrollbar">
                    <span class="chip flag-emoji text-ellipsis whitespace-nowrap overflow-hidden size-sm variant-bordered">
                      [Proxy Chain]
                    </span>
                    <span class="chip size-sm variant-bordered">
                      ↑ [Upload Amount] ↓ [Download Amount]
                    </span>
                  </div>
                </div>
              </div>
              <button class="button color-danger variant-light isIconOnly absolute right-2 top-1/2 -translate-y-1/2"><svg class="icon text-foreground" viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                
                </svg></button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
`;
export default mihomoMainContent;