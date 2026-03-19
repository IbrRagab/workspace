// Global Entry Point for Smart Workspace App

document.addEventListener('DOMContentLoaded', () => {
    console.log("Initializing Smart Workspace App...");
    
    // Simulate App Loading & Setup
    setTimeout(() => {
        initRouter();
        renderLayout();
        
        // Remove loader and show content
        const loader = document.querySelector('.loader');
        if (loader) loader.style.display = 'none';
    }, 300); 
});

function renderLayout() {
    // Render Sidebar
    const sidebar = document.getElementById('sidebar-container');
    sidebar.innerHTML = `
        <div style="padding: var(--spacing-6); font-weight: 700; font-size: var(--font-size-xl); color: var(--color-primary); border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style="box-shadow: var(--shadow-sm); border-radius: 6px;"><rect width="32" height="32" rx="8" fill="var(--color-primary)"/><path d="M10 12l6-4 6 4v8l-6 4-6-4v-8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Nexus<span style="color: var(--color-text-main);">Space</span>
        </div>
        <nav style="padding: var(--spacing-4);">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; margin-bottom: var(--spacing-3); padding-left: var(--spacing-3); margin-top: var(--spacing-2);">Menu</div>
            <ul style="display: flex; flex-direction: column; gap: var(--spacing-1);">
                <li><a href="#dashboard" class="nav-item active" id="nav-dashboard"><span style="font-size: 1.25rem;">📊</span> Dashboard</a></li>
                <li><a href="#workspaces" class="nav-item" id="nav-workspaces"><span style="font-size: 1.25rem;">🏢</span> Workspaces</a></li>
                <li><a href="#bookings" class="nav-item" id="nav-bookings"><span style="font-size: 1.25rem;">📅</span> Bookings</a></li>
                <li><a href="#profile" class="nav-item" id="nav-profile"><span style="font-size: 1.25rem;">⚙️</span> Profile</a></li>
            </ul>
        </nav>
    `;

    // Add CSS for nav links dynamically for now
    const style = document.createElement('style');
    style.innerHTML = `
        .nav-link {
            display: block;
            padding: var(--spacing-3);
            border-radius: var(--radius-md);
            color: var(--color-text-muted);
            font-weight: 500;
            transition: all var(--transition-fast);
        }
        .nav-link:hover {
            background: var(--color-background);
            color: var(--color-text-main);
        }
        .nav-link.active {
            background: var(--color-primary-light);
            color: var(--color-primary);
        }
        .nav-item {
            display: flex;
            align-items: center;
            gap: var(--spacing-3);
            padding: var(--spacing-3);
            border-radius: var(--radius-md);
            color: var(--color-text-muted);
            font-weight: 500;
            transition: all var(--transition-fast);
            text-decoration: none;
        }
        .nav-item:hover {
            background: var(--color-background);
            color: var(--color-text-main);
        }
        .nav-item.active {
            background: var(--color-primary-light);
            color: var(--color-primary);
        }
    `;
    document.head.appendChild(style);

    // Render Header
    const header = document.getElementById('header-container');
    header.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; height: 100%; padding: 0 var(--spacing-8);">
            <div id="header-title" style="font-weight: 600; font-size: var(--font-size-lg);">Dashboard</div>
            <div id="header-auth-container" style="display: flex; align-items: center; gap: var(--spacing-5);">
                <button style="padding: var(--spacing-2); border-radius: var(--radius-full); background: var(--color-background); transition: background var(--transition-fast); color: var(--color-text-muted);" onmouseover="this.style.background='#e2e8f0'; this.style.color='var(--color-text-main)'" onmouseout="this.style.background='var(--color-background)'; this.style.color='var(--color-text-muted)'">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </button>
                <div style="display: flex; align-items: center; gap: var(--spacing-3); cursor: pointer;">
                    <div style="text-align: right; display: flex; flex-direction: column;">
                        <span style="font-weight: 600; font-size: var(--font-size-sm); line-height: 1;">Ibrahim R.</span>
                        <span style="color: var(--color-text-muted); font-size: var(--font-size-xs); margin-top: 2px;">Admin</span>
                    </div>
                    <div style="width: 40px; height: 40px; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover)); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: var(--font-size-sm); box-shadow: var(--shadow-sm);">IR</div>
                </div>
            </div>
        </div>
    `;
}

// Global helper to update active nav state
window.updateNavState = function(path) {
    document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('active'));
    
    let id = 'nav-dashboard';
    if(path === '#workspaces') id = 'nav-workspaces';
    if(path === '#bookings') id = 'nav-bookings';
    if(path === '#profile') id = 'nav-profile';
    
    document.getElementById(id)?.classList.add('active');
    
    // Update header title
    const titles = {
        '#': 'Dashboard Overview',
        '#workspaces': 'Explore Workspaces',
        '#bookings': 'My Reservations',
        '#profile': 'My Profile'
    };
    
    const headerTitle = document.getElementById('header-title');
    if(headerTitle) {
        headerTitle.textContent = titles[path] || 'Workspace';
    }
};

window.updateHeaderAuth = function() {
    const user = window.authState?.user;
    if (!user) return;
    
    const header = document.getElementById('header-container');
    const initials = user.name.split(' ').map(n => n[0]).join('');
    
    // We update the right side of the header, keeping the title logic intact
    header.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; height: 100%; padding: 0 var(--spacing-8);">
            <div id="header-title" style="font-weight: 600; font-size: var(--font-size-lg);">\${document.getElementById('header-title')?.textContent || 'Dashboard'}</div>
            <div style="display: flex; align-items: center; gap: var(--spacing-5);">
                <button style="padding: var(--spacing-2); border-radius: var(--radius-full); background: var(--color-background); transition: background var(--transition-fast); color: var(--color-text-muted);" onmouseover="this.style.background='#e2e8f0'; this.style.color='var(--color-text-main)'" onmouseout="this.style.background='var(--color-background)'; this.style.color='var(--color-text-muted)'">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </button>
                <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                    <div style="text-align: right; display: flex; flex-direction: column;">
                        <span style="font-weight: 600; font-size: var(--font-size-sm); line-height: 1;">\${user.name}</span>
                        <span style="color: var(--color-text-muted); font-size: var(--font-size-xs); margin-top: 2px;">\${user.role}</span>
                    </div>
                    <div style="position: relative;" class="dropdown-wrapper">
                        <div style="width: 40px; height: 40px; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover)); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: var(--font-size-sm); box-shadow: var(--shadow-sm); cursor: pointer;" onclick="document.getElementById('profile-dropdown').style.display = document.getElementById('profile-dropdown').style.display === 'none' ? 'block' : 'none'">\${initials}</div>
                        
                        <div id="profile-dropdown" class="card" style="display: none; position: absolute; top: 100%; right: 0; margin-top: var(--spacing-2); width: 200px; padding: var(--spacing-2); z-index: 100;">
                            <a href="#profile" onclick="document.getElementById('profile-dropdown').style.display='none'" class="btn btn-ghost" style="width: 100%; justify-content: flex-start; color: var(--color-text-main); margin-bottom: 4px; text-decoration: none;">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: var(--spacing-2);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                My Profile
                            </a>
                            <div style="border-top: 1px solid var(--color-border); margin: 4px 0;"></div>
                            <button onclick="window.authState.logout(); document.getElementById('profile-dropdown').style.display='none'" class="btn btn-ghost" style="width: 100%; justify-content: flex-start; color: var(--color-danger);">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: var(--spacing-2);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
