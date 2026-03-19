function renderLocations() {
    return `
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow-y: auto; background: var(--color-background); z-index: 100;">
            <header style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-4) var(--spacing-8); background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 50;">
                <a href="#landing" style="font-weight: 700; font-size: var(--font-size-2xl); color: var(--color-primary); display: flex; align-items: center; gap: 8px; text-decoration: none;">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style="box-shadow: var(--shadow-sm); border-radius: 8px;"><rect width="32" height="32" rx="8" fill="var(--color-primary)"/><path d="M10 12l6-4 6 4v8l-6 4-6-4v-8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Nexus<span style="color: var(--color-text-main);">Space</span>
                </a>
                <nav style="display: flex; gap: var(--spacing-6); align-items: center;">
                    <a href="#landing" style="font-weight: 500; color: var(--color-text-muted); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Home</a>
                    <a href="#pricing" style="font-weight: 500; color: var(--color-text-muted); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Pricing</a>
                    <a href="#login" class="btn btn-outline" style="margin-left: var(--spacing-4);">Log In</a>
                    <a href="#checkout" class="btn btn-primary">Start Booking</a>
                </nav>
            </header>

            <section style="padding: var(--spacing-12) var(--spacing-8); max-width: 1200px; margin: 0 auto; min-height: 80vh;">
                <div style="text-align: center; margin-bottom: var(--spacing-12);">
                    <h1 class="text-h1" style="font-size: 3.5rem; margin-bottom: var(--spacing-4);">Our Global Locations</h1>
                    <p class="text-muted" style="font-size: var(--font-size-xl); max-width: 700px; margin: 0 auto;">Experience premium workspaces in the heart of the world's most dynamic cities. 4 extraordinary hub plans ready for your team.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: var(--spacing-8);">
                    
                    <!-- Location 1 -->
                    <div class="card interactive" style="overflow: hidden; display: flex; flex-direction: column;">
                        <div style="height: 250px; position: relative;">
                            <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" style="width: 100%; height: 100%; object-fit: cover;">
                            <div class="badge badge-primary" style="position: absolute; top: var(--spacing-4); right: var(--spacing-4); background: rgba(255,255,255,0.9); font-size: var(--font-size-sm); padding: var(--spacing-1) var(--spacing-3);">New York, USA</div>
                        </div>
                        <div style="padding: var(--spacing-6); display: flex; flex-direction: column; flex: 1;">
                            <h3 class="text-h2" style="margin-bottom: var(--spacing-2);">Downtown Tech District</h3>
                            <p class="text-muted" style="margin-bottom: var(--spacing-6);">123 Innovation Drive, Suite 500. Features sweeping views of the Manhattan skyline.</p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-3); margin-bottom: var(--spacing-8); font-size: var(--font-size-sm);">
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🏢</span> 50,000 sqft</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">☕</span> Artisan Cafe</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🚗</span> Secure Parking</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🌱</span> Outdoor Terrace</div>
                            </div>
                            <a href="#workspaces" class="btn btn-outline" style="margin-top: auto; width: 100%;">View Available Spaces</a>
                        </div>
                    </div>

                    <!-- Location 2 -->
                    <div class="card interactive" style="overflow: hidden; display: flex; flex-direction: column;">
                        <div style="height: 250px; position: relative;">
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" style="width: 100%; height: 100%; object-fit: cover;">
                            <div class="badge badge-primary" style="position: absolute; top: var(--spacing-4); right: var(--spacing-4); background: rgba(255,255,255,0.9); font-size: var(--font-size-sm); padding: var(--spacing-1) var(--spacing-3);">London, UK</div>
                        </div>
                        <div style="padding: var(--spacing-6); display: flex; flex-direction: column; flex: 1;">
                            <h3 class="text-h2" style="margin-bottom: var(--spacing-2);">Shoreditch Exchange</h3>
                            <p class="text-muted" style="margin-bottom: var(--spacing-6);">88 Commercial Street. The premier hub for creative agencies and tech startups.</p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-3); margin-bottom: var(--spacing-8); font-size: var(--font-size-sm);">
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🏢</span> 35,000 sqft</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🎙️</span> Podcast Studios</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🚲</span> Bike Storage</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🚿</span> Executive Showers</div>
                            </div>
                            <a href="#workspaces" class="btn btn-outline" style="margin-top: auto; width: 100%;">View Available Spaces</a>
                        </div>
                    </div>

                    <!-- Location 3 -->
                    <div class="card interactive" style="overflow: hidden; display: flex; flex-direction: column;">
                        <div style="height: 250px; position: relative;">
                            <img src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?auto=format&fit=crop&q=80&w=800" style="width: 100%; height: 100%; object-fit: cover;">
                            <div class="badge badge-primary" style="position: absolute; top: var(--spacing-4); right: var(--spacing-4); background: rgba(255,255,255,0.9); font-size: var(--font-size-sm); padding: var(--spacing-1) var(--spacing-3);">Dubai, UAE</div>
                        </div>
                        <div style="padding: var(--spacing-6); display: flex; flex-direction: column; flex: 1;">
                            <h3 class="text-h2" style="margin-bottom: var(--spacing-2);">Marina Trade Center</h3>
                            <p class="text-muted" style="margin-bottom: var(--spacing-6);">Level 42, Marina Tower. Ultra-luxury suites designed for global enterprise teams.</p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-3); margin-bottom: var(--spacing-8); font-size: var(--font-size-sm);">
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🏢</span> 60,000 sqft</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🤵</span> 24/7 Concierge</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🚁</span> Helipad Access</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🍽️</span> Private Dining</div>
                            </div>
                            <a href="#workspaces" class="btn btn-outline" style="margin-top: auto; width: 100%;">View Available Spaces</a>
                        </div>
                    </div>

                    <!-- Location 4 -->
                    <div class="card interactive" style="overflow: hidden; display: flex; flex-direction: column;">
                        <div style="height: 250px; position: relative;">
                            <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800" style="width: 100%; height: 100%; object-fit: cover;">
                            <div class="badge badge-primary" style="position: absolute; top: var(--spacing-4); right: var(--spacing-4); background: rgba(255,255,255,0.9); font-size: var(--font-size-sm); padding: var(--spacing-1) var(--spacing-3);">Singapore</div>
                        </div>
                        <div style="padding: var(--spacing-6); display: flex; flex-direction: column; flex: 1;">
                            <h3 class="text-h2" style="margin-bottom: var(--spacing-2);">Raffles Financial</h3>
                            <p class="text-muted" style="margin-bottom: var(--spacing-6);">1 Finlayson Green. Surrounded by the world's most prestigious financial institutions.</p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-3); margin-bottom: var(--spacing-8); font-size: var(--font-size-sm);">
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🏢</span> 40,000 sqft</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🎧</span> Soundproof Pods</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🚆</span> MRT Connected</div>
                                <div style="display: flex; gap: 8px; align-items: center;"><span style="color: var(--color-primary);">🏋️</span> Gym Access</div>
                            </div>
                            <a href="#workspaces" class="btn btn-outline" style="margin-top: auto; width: 100%;">View Available Spaces</a>
                        </div>
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
