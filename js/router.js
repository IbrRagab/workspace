

// Simulate simple auth state
window.authState = {
    isAuthenticated: false,
    user: null,
    login: function() {
        this.isAuthenticated = true;
        this.user = { name: "Ibrahim R.", role: "Admin" };
        window.location.hash = '#dashboard';
        
        // Notify the layout to show log out button
        window.updateHeaderAuth();
    },
    logout: function() {
        this.isAuthenticated = false;
        this.user = null;
        window.location.hash = '#landing';
    }
};

function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); 
}

function handleRoute() {
    let path = window.location.hash || '#';
    
    // Auth Guards
    if (!window.authState.isAuthenticated) {
        if (path !== '#landing' && path !== '#login' && path !== '#checkout' && path !== '#pricing' && path !== '#locations' && path !== '#workspaces' && path !== '#workspace-detail') {
            window.location.hash = '#landing';
            return;
        }
    } else {
        if (path === '#' || path === '#landing' || path === '#login' || path === '#register') {
            window.location.hash = '#dashboard';
            return;
        }
    }

    const mainContent = document.getElementById('main-content');
    const sidebar = document.getElementById('sidebar-container');
    const header = document.getElementById('header-container');
    
    if (path === '#landing' || path === '#login' || path === '#checkout' || path === '#pricing' || path === '#locations') {
        sidebar.style.display = 'none';
        header.style.display = 'none';
        mainContent.style.padding = '0'; // Full bleed for landing / external pages
    } else {
        sidebar.style.display = '';
        header.style.display = '';
        mainContent.style.padding = 'var(--spacing-6) var(--spacing-8)';
        if(window.updateNavState) window.updateNavState(path);
        if(window.updateHeaderAuth) window.updateHeaderAuth();
    }
    
    const routes = {
        '#landing': renderLanding,
        '#login': renderLogin,
        '#checkout': renderCheckout,
        '#pricing': renderPricing,
        '#locations': renderLocations,
        '#dashboard': renderDashboard,
        '#profile': renderProfile,
        '#workspaces': renderWorkspaces,
        '#workspace-detail': renderWorkspaceDetail,
        '#bookings': renderBookings
    };

    const renderFn = routes[path] || renderNotFound;
    
    mainContent.style.opacity = 0;
    setTimeout(() => {
        mainContent.innerHTML = renderFn();
        mainContent.style.transition = 'opacity var(--transition-normal)';
        mainContent.style.opacity = 1;
    }, 150);
}

function renderLogin() {
    return `
        <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80') center/cover;">
            <div style="position: absolute; width: 100%; height: 100%; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);"></div>
            
            <div class="card card-body" style="width: 100%; max-width: 440px; text-align: center; position: relative; z-index: 10; padding: var(--spacing-10);">
                <div style="font-weight: 700; font-size: var(--font-size-2xl); color: var(--color-primary); display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: var(--spacing-6);">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="var(--color-primary)"/><path d="M10 12l6-4 6 4v8l-6 4-6-4v-8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    NexusSpace
                </div>
                <h2 class="text-h2">Welcome Back</h2>
                <p class="text-muted" style="margin-bottom: var(--spacing-8);">Log in to manage your bookings and account.</p>
                
                <div style="margin-bottom: var(--spacing-4);">
                    <input type="email" placeholder="Email Address" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; margin-bottom: var(--spacing-3);">
                    <input type="password" placeholder="Password" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                </div>
                
                <button onclick="window.authState.login()" class="btn btn-primary" style="width: 100%; font-size: var(--font-size-lg); padding: var(--spacing-3); margin-top: var(--spacing-4);">Log In Demo</button>
                
                <div style="margin-top: var(--spacing-6); font-size: var(--font-size-sm); color: var(--color-text-muted);">
                    Don't have an account? <a href="#register" style="color: var(--color-primary); font-weight: 500;">Sign up</a>
                </div>
            </div>
        </div>
    `;
}

function renderDashboard() {
    return `
        <div style="margin-bottom: var(--spacing-8);">
            <h1 style="font-size: var(--font-size-3xl); font-weight: 700; letter-spacing: -0.02em; color: var(--color-text-main);">Welcome to NexusSpace</h1>
            <p style="color: var(--color-text-muted); font-size: var(--font-size-lg); margin-top: var(--spacing-2);">Here's what's happening today.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-6); margin-bottom: var(--spacing-8);">
            <!-- KPI Card 1 -->
            <div class="card card-body interactive">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-4);">
                    <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: var(--color-primary-light); color: var(--color-primary); display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                </div>
                <div style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: var(--spacing-1); font-weight: 500;">Next Booking</div>
                <div style="font-weight: 700; font-size: var(--font-size-xl); color: var(--color-text-main);">Conference Room C</div>
                <div style="margin-top: var(--spacing-2); display: inline-block;" class="badge badge-primary">Today, 2:00 PM</div>
            </div>
            
            <!-- KPI Card 2 -->
             <div class="card card-body interactive">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-4);">
                    <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: #fdf2f8; color: #db2777; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                    </div>
                </div>
                <div style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: var(--spacing-1); font-weight: 500;">Active Plan</div>
                <div style="font-weight: 700; font-size: var(--font-size-xl); color: var(--color-text-main);">Dedicated Desk</div>
                <div style="margin-top: var(--spacing-2);" class="badge badge-success">Active &middot; Renews in 14 days</div>
            </div>
            
            <!-- KPI Card 3 -->
            <div class="card card-body interactive">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-4);">
                    <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: #fef3c7; color: #d97706; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                </div>
                <div style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: var(--spacing-1); font-weight: 500;">Current Balance</div>
                <div style="font-weight: 700; font-size: var(--font-size-xl); color: var(--color-text-main);">$120.00</div>
                <div style="color: var(--color-text-muted); margin-top: var(--spacing-2); font-size: var(--font-size-sm); font-weight: 500; display: inline-block;">Available for on-demand bookings</div>
            </div>
        </div>
        
        <div>
            <h2 class="text-h2">Recent Activity</h2>
            <div class="card" style="overflow: hidden;">
                <div style="padding: var(--spacing-4) var(--spacing-6); border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-weight: 500;">Checked in - Hot Desk Area</div>
                    <div style="color: var(--color-text-muted); font-size: var(--font-size-sm);">Today, 9:00 AM</div>
                </div>
                <div style="padding: var(--spacing-4) var(--spacing-6); border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-weight: 500;">Booked Meeting Room B</div>
                    <div style="color: var(--color-text-muted); font-size: var(--font-size-sm);">Yesterday, 3:45 PM</div>
                </div>
                <div style="padding: var(--spacing-4) var(--spacing-6); display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-weight: 500;">Invoice #INV-2026-004 Paid</div>
                    <div style="color: var(--color-text-muted); font-size: var(--font-size-sm);">Mar 15, 2026</div>
                </div>
            </div>
        </div>
    `;
}

function renderWorkspaces() {
    return `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-6);">
            <h1 style="font-size: var(--font-size-2xl); font-weight: 700;">Available Workspaces</h1>
            <div style="display: flex; gap: var(--spacing-2);">
                <button class="btn btn-outline">Filters</button>
                <button class="btn btn-primary">Map View</button>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--spacing-6);">
            <!-- Workspace Card 1 -->
            <div class="card interactive" style="overflow: hidden;">
                <div style="height: 180px; background: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800') center/cover; position: relative;">
                    <div style="position: absolute; top: var(--spacing-3); right: var(--spacing-3); background: var(--color-surface); padding: var(--spacing-1) var(--spacing-2); border-radius: var(--radius-md); font-size: var(--font-size-xs); font-weight: 600; display: flex; align-items: center; gap: 4px;">
                        <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-success);"></div>
                        Available Now
                    </div>
                </div>
                <div style="padding: var(--spacing-5);">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-2);">
                        <h3 style="font-weight: 600; font-size: var(--font-size-lg);">Focus Room A</h3>
                        <div style="font-weight: 700; color: var(--color-primary);">$15<span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 400;">/hr</span></div>
                    </div>
                    <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: var(--spacing-4);">Quiet, soundproof pod perfect for video calls and deep work.</p>
                    <div style="display: flex; gap: var(--spacing-2); margin-bottom: var(--spacing-5);">
                        <span class="badge badge-neutral">1 Person</span>
                        <span class="badge badge-neutral">Monitor</span>
                    </div>
                    <a href="#workspace-detail" class="btn btn-outline" style="width: 100%;">Book Now</a>
                </div>
            </div>
            
            <!-- Workspace Card 2 -->
             <div class="card interactive" style="overflow: hidden;">
                <div style="height: 180px; background: url('https://images.unsplash.com/photo-1571401835393-8bfeaf666c89?auto=format&fit=crop&q=80&w=800') center/cover; position: relative;">
                    <div style="position: absolute; top: var(--spacing-3); right: var(--spacing-3); background: var(--color-surface); padding: var(--spacing-1) var(--spacing-2); border-radius: var(--radius-md); font-size: var(--font-size-xs); font-weight: 600; display: flex; align-items: center; gap: 4px;">
                        <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-warning);"></div>
                        Busy until 2 PM
                    </div>
                </div>
                <div style="padding: var(--spacing-5);">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-2);">
                        <h3 style="font-weight: 600; font-size: var(--font-size-lg);">Conference Room C</h3>
                        <div style="font-weight: 700; color: var(--color-primary);">$45<span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 400;">/hr</span></div>
                    </div>
                    <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: var(--spacing-4);">Spacious meeting room equipped with 4K projector and whiteboard.</p>
                    <div style="display: flex; gap: var(--spacing-2); margin-bottom: var(--spacing-5);">
                        <span class="badge badge-neutral">8 People</span>
                        <span class="badge badge-neutral">Projector</span>
                    </div>
                    <button class="btn btn-outline" style="width: 100%;">Book for Later</button>
                </div>
            </div>
        </div>
    `;
}

function renderBookings() {
    return `
        <h1 style="margin-bottom: var(--spacing-6); font-size: var(--font-size-2xl);">My Bookings</h1>
        <p style="color: var(--color-text-muted);">Manage your current and past reservations.</p>
        
        <div class="card card-body" style="margin-top: var(--spacing-6); text-align: center; padding-top: var(--spacing-8); padding-bottom: var(--spacing-8);">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-background); color: var(--color-text-muted); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-4);">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-h3">No upcoming bookings</h3>
            <p class="text-muted" style="margin-bottom: var(--spacing-6);">You don't have any workspaces reserved for the future.</p>
            <a href="#workspaces" class="btn btn-primary">Explore Workspaces</a>
        </div>
    `;
}

function renderNotFound() {
    return `
        <div style="text-align: center; padding-top: 10vh;">
            <h1 style="margin-bottom: var(--spacing-4); font-size: 6rem; font-weight: 700; color: var(--color-border);">404</h1>
            <h2 style="margin-bottom: var(--spacing-2); font-size: var(--font-size-xl);">Page Not Found</h2>
            <p style="color: var(--color-text-muted); margin-bottom: var(--spacing-6);">The area of the workspace you're looking for doesn't exist.</p>
            <a href="#dashboard" class="btn btn-primary">Return Home</a>
        </div>
    `;
}
