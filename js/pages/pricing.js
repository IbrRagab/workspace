function renderPricing() {
    return `
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow-y: auto; background: var(--color-background); z-index: 100;">
            <!-- Header for navigation -->
            <header style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-4) var(--spacing-8); background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 50;">
                <a href="#landing" style="font-weight: 700; font-size: var(--font-size-2xl); color: var(--color-primary); display: flex; align-items: center; gap: 8px; text-decoration: none;">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style="box-shadow: var(--shadow-sm); border-radius: 8px;"><rect width="32" height="32" rx="8" fill="var(--color-primary)"/><path d="M10 12l6-4 6 4v8l-6 4-6-4v-8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Nexus<span style="color: var(--color-text-main);">Space</span>
                </a>
                <nav style="display: flex; gap: var(--spacing-6); align-items: center;">
                    <a href="#landing" style="font-weight: 500; color: var(--color-text-muted); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Home</a>
                    <a href="#locations" style="font-weight: 500; color: var(--color-text-muted); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Locations</a>
                    <a href="#login" class="btn btn-outline" style="margin-left: var(--spacing-4);">Log In</a>
                    <a href="#checkout" class="btn btn-primary">Start Booking</a>
                </nav>
            </header>

            <section style="padding: var(--spacing-12) var(--spacing-8); max-width: 1200px; margin: 0 auto; min-height: 80vh;">
                <div style="text-align: center; margin-bottom: var(--spacing-12);">
                    <h1 class="text-h1" style="font-size: 3.5rem; margin-bottom: var(--spacing-4);">Simple, transparent pricing</h1>
                    <p class="text-muted" style="font-size: var(--font-size-xl); max-width: 600px; margin: 0 auto;">Whether you need a desk for the day or an office for the year, we have a plan designed specifically for you and your team.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--spacing-6); align-items: stretch;">
                    <!-- Plan 1: Day Pass -->
                    <div class="card card-body" style="background: white; border-top: 4px solid var(--color-border); display: flex; flex-direction: column;">
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-2);">Day Pass</h3>
                        <p class="text-muted text-sm" style="margin-bottom: var(--spacing-6); height: 40px;">Drop in and work from any open desk for the day.</p>
                        <div style="margin-bottom: var(--spacing-6);">
                            <span style="font-size: 2.5rem; font-weight: 800; color: var(--color-text-main);">$25</span>
                            <span class="text-muted">/day</span>
                        </div>
                        <ul style="flex: 1; display: flex; flex-direction: column; gap: var(--spacing-4); margin-bottom: var(--spacing-8);">
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Fast Wi-Fi Access</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Unlimited Artisan Coffee</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Lounges & Common Areas</li>
                            <li style="display: flex; gap: 8px; align-items: start; opacity: 0.5;"><span style="color: var(--color-text-muted);">✕</span> Meeting Room Credits</li>
                        </ul>
                        <a href="#checkout" class="btn btn-outline" style="width: 100%;">Get a Day Pass</a>
                    </div>
                    
                    <!-- Plan 2: Hot Desk -->
                    <div class="card card-body" style="background: white; border-top: 4px solid var(--color-primary-light); display: flex; flex-direction: column;">
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-2);">Hot Desk</h3>
                        <p class="text-muted text-sm" style="margin-bottom: var(--spacing-6); height: 40px;">Guaranteed workspace in our common area every day.</p>
                        <div style="margin-bottom: var(--spacing-6);">
                            <span style="font-size: 2.5rem; font-weight: 800; color: var(--color-text-main);">$299</span>
                            <span class="text-muted">/mo</span>
                        </div>
                        <ul style="flex: 1; display: flex; flex-direction: column; gap: var(--spacing-4); margin-bottom: var(--spacing-8);">
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> 24/7 Building Access</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Secure Mail & Package Handling</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> 2 Hours Meeting Room Credits</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Network App Access</li>
                        </ul>
                        <a href="#checkout" class="btn btn-outline" style="width: 100%;">Choose Hot Desk</a>
                    </div>
                    
                    <!-- Plan 3: Dedicated Desk (Highlighted) -->
                    <div class="card card-body" style="background: white; border: 2px solid var(--color-primary); transform: scale(1.03); z-index: 10; display: flex; flex-direction: column; position: relative; box-shadow: var(--shadow-lg);">
                        <div class="badge badge-primary" style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); padding: var(--spacing-1) var(--spacing-4); font-size: var(--font-size-sm);">Most Popular</div>
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-2); margin-top: var(--spacing-2);">Dedicated Desk</h3>
                        <p class="text-muted text-sm" style="margin-bottom: var(--spacing-6); height: 40px;">A permanent desk that is yours and yours alone.</p>
                        <div style="margin-bottom: var(--spacing-6);">
                            <span style="font-size: 2.5rem; font-weight: 800; color: var(--color-text-main);">$450</span>
                            <span class="text-muted">/mo</span>
                        </div>
                        <ul style="flex: 1; display: flex; flex-direction: column; gap: var(--spacing-4); margin-bottom: var(--spacing-8);">
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Personal Locking Filing Cabinet</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Setup your Monitor & Extras</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> 5 Hours Meeting Room Credits</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Premium Printing Services</li>
                        </ul>
                        <a href="#checkout" class="btn btn-primary" style="width: 100%;">Get Dedicated Desk</a>
                    </div>
                    
                    <!-- Plan 4: Private Office -->
                    <div class="card card-body" style="background: white; border-top: 4px solid var(--color-text-main); display: flex; flex-direction: column;">
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-2);">Private Office</h3>
                        <p class="text-muted text-sm" style="margin-bottom: var(--spacing-6); height: 40px;">Fully enclosed, lockable spaces with premium furniture.</p>
                        <div style="margin-bottom: var(--spacing-6);">
                            <span style="font-size: 1.25rem; font-weight: 700; color: var(--color-text-main);">From</span>
                            <span style="font-size: 2.5rem; font-weight: 800; color: var(--color-text-main);">$800</span>
                            <span class="text-muted">/mo</span>
                        </div>
                        <ul style="flex: 1; display: flex; flex-direction: column; gap: var(--spacing-4); margin-bottom: var(--spacing-8);">
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> 1-20 Person Suites</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Custom Wired Network & Firewall</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> 15 Hours Meeting Room Credits</li>
                            <li style="display: flex; gap: 8px; align-items: start;"><span style="color: var(--color-primary);">✓</span> Dedicated Logo Plaque</li>
                        </ul>
                        <a href="#landing" class="btn btn-outline" style="width: 100%;">Contact Sales</a>
                    </div>
                </div>
            </section>

            <!-- Footer Section -->
            <footer style="background: #0f172a; color: white; padding: var(--spacing-12) var(--spacing-8) var(--spacing-6); margin-top: auto;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-10); margin-bottom: var(--spacing-12);">
                        
                        <!-- Company Info & Contacts -->
                        <div>
                            <div style="font-weight: 700; font-size: var(--font-size-2xl); color: white; display: flex; align-items: center; gap: 8px; margin-bottom: var(--spacing-4);">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="var(--color-primary)"/><path d="M10 12l6-4 6 4v8l-6 4-6-4v-8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                NexusSpace
                            </div>
                            <p style="color: #94a3b8; font-size: var(--font-size-sm); line-height: 1.6; margin-bottom: var(--spacing-6); max-width: 300px;">Providing premium on-demand workspace hubs designed for deep focus and borderless collaboration.</p>
                            <div style="margin-bottom: var(--spacing-4); color: #cbd5e1;">
                                <div style="display: flex; align-items: start; gap: var(--spacing-2); margin-bottom: var(--spacing-3);"><span style="font-size: 18px; line-height: 1;">📍</span><span style="font-size: var(--font-size-sm); line-height: 1.5;">123 Innovation Drive, Suite 500<br>Downtown Tech District, NY 10001</span></div>
                                <div style="display: flex; align-items: center; gap: var(--spacing-2); margin-bottom: var(--spacing-3);"><span style="font-size: 18px; line-height: 1;">✉️</span><span style="font-size: var(--font-size-sm);">hello@nexusspace.com</span></div>
                                <div style="display: flex; align-items: center; gap: var(--spacing-2);"><span style="font-size: 18px; line-height: 1;">📞</span><span style="font-size: var(--font-size-sm);">+1 (555) 123-4567</span></div>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div>
                            <h4 style="font-weight: 600; font-size: var(--font-size-lg); margin-bottom: var(--spacing-4); color: white;">Explore</h4>
                            <ul style="display: flex; flex-direction: column; gap: var(--spacing-3);">
                                <li><a href="#locations" style="color: #94a3b8; font-size: var(--font-size-sm); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#94a3b8'">All Locations</a></li>
                                <li><a href="#" style="color: #94a3b8; font-size: var(--font-size-sm); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#94a3b8'">Hot Desks</a></li>
                                <li><a href="#" style="color: #94a3b8; font-size: var(--font-size-sm); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#94a3b8'">Private Offices</a></li>
                                <li><a href="#" style="color: #94a3b8; font-size: var(--font-size-sm); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#94a3b8'">Meeting Rooms</a></li>
                            </ul>
                        </div>
                        
                        <!-- Map Location Embed -->
                        <div style="grid-column: span 2;">
                            <h4 style="font-weight: 600; font-size: var(--font-size-lg); margin-bottom: var(--spacing-4); color: white;">Headquarters Location</h4>
                            <div style="border-radius: var(--radius-lg); overflow: hidden; height: 180px; border: 1px solid #334155;">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280941944!2d-74.11976269666014!3d40.69766333909193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1711116669999!5m2!1sen!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bottom Footer -->
                    <div style="border-top: 1px solid #334155; padding-top: var(--spacing-6); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-4);">
                        <div style="color: #64748b; font-size: var(--font-size-sm);">&copy; 2026 NexusSpace Inc. All rights reserved.</div>
                        <div style="display: flex; gap: var(--spacing-4);">
                            <!-- Social Icons -->
                            <a href="#" style="color: #94a3b8; font-weight: 500; text-decoration: none; transition: color var(--transition-fast);" onmouseover="this.style.color='white'" onmouseout="this.style.color='#94a3b8'">Twitter (X)</a>
                            <a href="#" style="color: #94a3b8; font-weight: 500; text-decoration: none; transition: color var(--transition-fast);" onmouseover="this.style.color='white'" onmouseout="this.style.color='#94a3b8'">LinkedIn</a>
                            <a href="#" style="color: #94a3b8; font-weight: 500; text-decoration: none; transition: color var(--transition-fast);" onmouseover="this.style.color='white'" onmouseout="this.style.color='#94a3b8'">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    `;
}
