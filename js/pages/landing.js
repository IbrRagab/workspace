function renderLanding() {
    return `
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow-y: auto; background: var(--color-background); z-index: 100;">
            <!-- Landing Header -->
            <header style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-4) var(--spacing-8); background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 50;">
                <div style="font-weight: 700; font-size: var(--font-size-2xl); color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style="box-shadow: var(--shadow-sm); border-radius: 8px;"><rect width="32" height="32" rx="8" fill="var(--color-primary)"/><path d="M10 12l6-4 6 4v8l-6 4-6-4v-8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Nexus<span style="color: var(--color-text-main);">Space</span>
                </div>
                <nav style="display: flex; gap: var(--spacing-6); align-items: center;">
                    <a href="#locations" style="font-weight: 500; color: var(--color-text-muted); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Locations</a>
                    <a href="#pricing" style="font-weight: 500; color: var(--color-text-muted); transition: color var(--transition-fast); text-decoration: none;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Pricing</a>
                    <a href="#login" class="btn btn-outline" style="margin-left: var(--spacing-4);">Log In</a>
                    <a href="#checkout" class="btn btn-primary">Start Booking</a>
                </nav>
            </header>

            <!-- Hero Section -->
            <section style="display: flex; align-items: center; justify-content: center; min-height: 85vh; padding: var(--spacing-12) var(--spacing-8); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -10%; right: -5%; width: 500px; height: 500px; background: radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%); border-radius: 50%; opacity: 0.6; z-index: 0; filter: blur(40px);"></div>
                
                <div style="max-width: 1200px; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-12); align-items: center; z-index: 1;">
                    <div>
                        <div class="badge badge-primary" style="margin-bottom: var(--spacing-6); padding: var(--spacing-2) var(--spacing-4); border-radius: var(--radius-full);">✨ Redefining your workday</div>
                        <h1 style="font-size: 3.5rem; font-weight: 800; line-height: 1.15; color: var(--color-text-main); margin-bottom: var(--spacing-6); letter-spacing: -0.03em;">
                            The absolute <br>
                            <span style="color: var(--color-primary); position: relative;">
                                premium
                                <svg style="position: absolute; bottom: -8px; left: 0; width: 100%; height: 12px;" viewBox="0 0 200 9" fill="none"><path d="M2.00063 6.9422C41.4057 2.37976 116.516 -3.109 198.835 6.9422" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>
                            </span>
                            <br>workspace experience.
                        </h1>
                        <p style="font-size: var(--font-size-xl); color: var(--color-text-muted); line-height: 1.6; margin-bottom: var(--spacing-8); max-width: 500px;">
                            Book beautiful desks, private offices, and state-of-the-art meeting rooms on demand. Designed for focus, engineered for collaboration.
                        </p>
                        <div style="display: flex; gap: var(--spacing-4);">
                            <a href="#checkout" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-4) var(--spacing-8); box-shadow: var(--shadow-md);">Start Booking</a>
                            <a href="#workspaces" class="btn btn-outline" style="font-size: var(--font-size-lg); padding: var(--spacing-4) var(--spacing-8); background: white;">Explore Spaces</a>
                        </div>
                    </div>
                    
                    <div style="position: relative;">
                        <div style="border-radius: 24px; overflow: hidden; box-shadow: var(--shadow-lg); transform: perspective(1000px) rotateY(-5deg); transition: transform 0.5s ease;" onmouseover="this.style.transform='perspective(1000px) rotateY(0deg)'" onmouseout="this.style.transform='perspective(1000px) rotateY(-5deg)'">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Premium Workspace" style="width: 100%; height: auto; display: block; filter: brightness(0.95);">
                        </div>
                        <div style="position: absolute; bottom: 40px; left: -40px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); padding: var(--spacing-4); border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); border: 1px solid rgba(255,255,255,0.5); display: flex; align-items: center; gap: var(--spacing-4); animation: float 6s ease-in-out infinite;">
                            <div style="width: 48px; height: 48px; background: #ecfdf5; color: #10b981; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center;"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
                            <div><div style="font-weight: 700; font-size: var(--font-size-lg); color: var(--color-text-main);">Instant Booking</div><div style="color: var(--color-text-muted); font-size: var(--font-size-sm);">Zero wait time.</div></div>
                        </div>
                        <style>@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }</style>
                    </div>
                </div>
            </section>
            
            <!-- Features Section -->
            <section style="padding: var(--spacing-12) var(--spacing-8); background: var(--color-surface);">
                <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
                    <h2 class="text-h2" style="font-size: var(--font-size-3xl);">Everything you need to succeed</h2>
                    <p class="text-muted" style="font-size: var(--font-size-lg); max-width: 600px; margin: 0 auto var(--spacing-10);">Our centers are intentionally designed to maximize productivity and comfort, offering an unmatched experience.</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-8);">
                        <div class="card card-body" style="text-align: left;">
                            <div style="width: 48px; height: 48px; background: var(--color-primary-light); color: var(--color-primary); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: var(--spacing-4);">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </div>
                            <h3 class="text-h3">Enterprise Wi-Fi</h3>
                            <p class="text-muted text-sm" style="line-height: 1.6;">Gigabit speeds with guaranteed uptime and extreme security so you can work without interruption.</p>
                        </div>
                        <div class="card card-body" style="text-align: left;">
                            <div style="width: 48px; height: 48px; background: #fdf2f8; color: #db2777; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: var(--spacing-4);">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                            </div>
                            <h3 class="text-h3">Smart Access</h3>
                            <p class="text-muted text-sm" style="line-height: 1.6;">Unlock doors and check in using our integrated QR code access directly from your smartphone.</p>
                        </div>
                        <div class="card card-body" style="text-align: left;">
                            <div style="width: 48px; height: 48px; background: #fffbeb; color: #d97706; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: var(--spacing-4);">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            </div>
                            <h3 class="text-h3">Premium Amenities</h3>
                            <p class="text-muted text-sm" style="line-height: 1.6;">Unlimited artisanal coffee, ergonomic chairs, and fully supplied acoustic phone booths.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Customization Section -->
            <section style="padding: var(--spacing-12) var(--spacing-8); background: var(--color-background);">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: var(--spacing-10);">
                        <h2 class="text-h2" style="font-size: var(--font-size-3xl); color: var(--color-primary);">Customize your office space</h2>
                        <p class="text-muted" style="font-size: var(--font-size-lg);">Tailor your workspace to exactly match your team's workflow.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-6);">
                        <div class="card card-body interactive" style="text-align: center; background: white;"><div style="font-size: 32px; margin-bottom: var(--spacing-2);">🪑</div><div style="font-weight: 600;">Ergonomic Chairs</div></div>
                        <div class="card card-body interactive" style="text-align: center; background: white;"><div style="font-size: 32px; margin-bottom: var(--spacing-2);">🖥️</div><div style="font-weight: 600;">Standing Desks</div></div>
                        <div class="card card-body interactive" style="text-align: center; background: white;"><div style="font-size: 32px; margin-bottom: var(--spacing-2);">📋</div><div style="font-weight: 600;">Whiteboards</div></div>
                        <div class="card card-body interactive" style="text-align: center; background: white;"><div style="font-size: 32px; margin-bottom: var(--spacing-2);">📺</div><div style="font-weight: 600;">4K Screens</div></div>
                        <div class="card card-body interactive" style="text-align: center; background: white;"><div style="font-size: 32px; margin-bottom: var(--spacing-2);">📶</div><div style="font-weight: 600;">Dedicated WiFi</div></div>
                        <div class="card card-body interactive" style="text-align: center; background: white;"><div style="font-size: 32px; margin-bottom: var(--spacing-2);">🎥</div><div style="font-weight: 600;">Video Conferencing</div></div>
                    </div>
                </div>
            </section>

            <!-- Gallery Section -->
            <section style="padding: var(--spacing-12) var(--spacing-8); background: var(--color-surface);">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: var(--spacing-10);">
                        <h2 class="text-h2" style="font-size: var(--font-size-3xl);">Take a look inside</h2>
                        <p class="text-muted" style="font-size: var(--font-size-lg);">Inspiring environments built for the modern professional.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 250px; gap: var(--spacing-4);">
                        <div style="grid-column: span 2; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform var(--transition-normal);" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200" style="width: 100%; height: 100%; object-fit: cover;"></div>
                        <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform var(--transition-normal);" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'"><img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600" style="width: 100%; height: 100%; object-fit: cover;"></div>
                        <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform var(--transition-normal);" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'"><img src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?auto=format&fit=crop&q=80&w=600" style="width: 100%; height: 100%; object-fit: cover;"></div>
                        <div style="grid-column: span 2; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform var(--transition-normal);" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'"><img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1200" style="width: 100%; height: 100%; object-fit: cover;"></div>
                    </div>
                </div>
            </section>
            
            <!-- User Reviews Section -->
            <section style="padding: var(--spacing-12) var(--spacing-8); background: var(--color-primary-light);">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: var(--spacing-10);">
                        <h2 class="text-h2" style="font-size: var(--font-size-3xl); color: var(--color-primary);">Trusted by innovators</h2>
                        <p class="text-muted" style="font-size: var(--font-size-lg);">Discover why thousands of professionals choose NexusSpace.</p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--spacing-6);">
                        <div class="card card-body" style="background: white;">
                            <div style="color: #f59e0b; margin-bottom: var(--spacing-3); display: flex; gap: 4px; font-size: 20px;">
                                ★★★★★
                            </div>
                            <p style="font-size: var(--font-size-base); color: var(--color-text-main); font-weight: 500; line-height: 1.6; margin-bottom: var(--spacing-6);">"NexusSpace has completely transformed the way our remote team collaborates. The meeting rooms are state-of-the-art, and the on-demand booking is flawless. Plus, the coffee is genuinely amazing."</p>
                            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                                <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden;"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" style="width:100%; height:100%; object-fit:cover;"></div>
                                <div>
                                    <div style="font-weight: 600;">Sarah Jenkins</div>
                                    <div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">CTO, TechFlow</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card card-body" style="background: white;">
                            <div style="color: #f59e0b; margin-bottom: var(--spacing-3); display: flex; gap: 4px; font-size: 20px;">
                                ★★★★★
                            </div>
                            <p style="font-size: var(--font-size-base); color: var(--color-text-main); font-weight: 500; line-height: 1.6; margin-bottom: var(--spacing-6);">"Finding a reliable, quiet place for crucial client calls used to be stressful. The acoustic phone booths at NexusSpace are a lifesaver. Extremely highly recommended for freelancers."</p>
                            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                                <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden;"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" style="width:100%; height:100%; object-fit:cover;"></div>
                                <div>
                                    <div style="font-weight: 600;">Michael Chen</div>
                                    <div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">Independent Consultant</div>
                                </div>
                            </div>
                        </div>

                        <div class="card card-body" style="background: white;">
                            <div style="color: #f59e0b; margin-bottom: var(--spacing-3); display: flex; gap: 4px; font-size: 20px;">
                                ★★★★★
                            </div>
                            <p style="font-size: var(--font-size-base); color: var(--color-text-main); font-weight: 500; line-height: 1.6; margin-bottom: var(--spacing-6);">"The community vibe coupled with the ultra-premium environment makes going to 'the office' incredibly enjoyable again. I was able to scale my startup from a hot desk to a private office seamlessly."</p>
                            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                                <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden;"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" style="width:100%; height:100%; object-fit:cover;"></div>
                                <div>
                                    <div style="font-weight: 600;">Elena Rodriguez</div>
                                    <div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">Founder & CEO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Contact & Feedback Section -->
            <section id="contact" style="padding: var(--spacing-12) var(--spacing-8); background: var(--color-background);">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-12);">
                        <div>
                            <h2 class="text-h2" style="font-size: var(--font-size-3xl); margin-bottom: var(--spacing-4);">Get in Touch</h2>
                            <p class="text-muted" style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-8);">We'd love to hear from you. Secure a private office or send us your feedback.</p>
                            <form style="display: flex; flex-direction: column; gap: var(--spacing-4);" onsubmit="event.preventDefault(); alert('Message sent!');">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
                                    <div><label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2);">First Name</label><input type="text" placeholder="John" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;"></div>
                                    <div><label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2);">Last Name</label><input type="text" placeholder="Doe" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;"></div>
                                </div>
                                <div><label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2);">Email</label><input type="email" placeholder="john@example.com" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;"></div>
                                <div><label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2);">Message / Feedback</label><textarea placeholder="How can we help you today?" rows="4" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; resize: vertical;"></textarea></div>
                                <button type="submit" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-3); align-self: flex-start;">Send Message</button>
                            </form>
                        </div>
                        <div style="border-radius: var(--radius-xl); overflow: hidden; height: 100%; min-height: 400px; box-shadow: var(--shadow-sm);"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" style="width: 100%; height: 100%; object-fit: cover;"></div>
                    </div>
                </div>
            </section>
            
            <!-- Footer Section -->
            <footer style="background: #0f172a; color: white; padding: var(--spacing-12) var(--spacing-8) var(--spacing-6);">
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
                                <div style="display: flex; align-items: start; gap: var(--spacing-2); margin-bottom: var(--spacing-3);">
                                    <span style="font-size: 18px; line-height: 1;">📍</span>
                                    <span style="font-size: var(--font-size-sm); line-height: 1.5;">123 Innovation Drive, Suite 500<br>Downtown Tech District, NY 10001</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: var(--spacing-2); margin-bottom: var(--spacing-3);">
                                    <span style="font-size: 18px; line-height: 1;">✉️</span>
                                    <span style="font-size: var(--font-size-sm);">hello@nexusspace.com</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: var(--spacing-2);">
                                    <span style="font-size: 18px; line-height: 1;">📞</span>
                                    <span style="font-size: var(--font-size-sm);">+1 (555) 123-4567</span>
                                </div>
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
