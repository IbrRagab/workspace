function renderCheckout() {
    return `
        <div style="min-height: 100vh; background: var(--color-background); padding-bottom: var(--spacing-12);">
            <header style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-4) var(--spacing-8); background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 50;">
                <a href="#landing" style="font-weight: 700; font-size: var(--font-size-2xl); color: var(--color-primary); display: flex; align-items: center; gap: 8px; text-decoration: none;">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style="box-shadow: var(--shadow-sm); border-radius: 8px;"><rect width="32" height="32" rx="8" fill="var(--color-primary)"/><path d="M10 12l6-4 6 4v8l-6 4-6-4v-8z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Nexus<span style="color: var(--color-text-main);">Space</span>
                </a>
                <a href="#landing" class="btn btn-outline">Cancel Request</a>
            </header>

            <main style="max-width: 800px; margin: var(--spacing-10) auto; padding: 0 var(--spacing-6);">
                <div style="text-align: center; margin-bottom: var(--spacing-10);">
                    <h1 class="text-h1" style="font-size: 2.5rem; margin-bottom: var(--spacing-2);">Configure Your Booking</h1>
                    <p class="text-muted" style="font-size: var(--font-size-lg);">Provide your details, select your service, and customize the ultimate workspace setup.</p>
                </div>

                <form class="card card-body" style="padding: var(--spacing-8); display: flex; flex-direction: column; gap: var(--spacing-10);" onsubmit="event.preventDefault(); alert('Booking request saved successfully! We will process your customizations.'); window.authState.login();">
                    
                    <!-- Section 1: User Info -->
                    <div>
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-6); padding-bottom: var(--spacing-2); border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;"><span style="color: var(--color-primary);">1.</span> Personal Information</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); margin-bottom: var(--spacing-4);">
                            <div>
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2); font-size: var(--font-size-sm);">First Name</label>
                                <input type="text" required placeholder="John" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div>
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2); font-size: var(--font-size-sm);">Last Name</label>
                                <input type="text" required placeholder="Doe" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
                            <div>
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2); font-size: var(--font-size-sm);">Email Address</label>
                                <input type="email" required placeholder="john@example.com" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div>
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2); font-size: var(--font-size-sm);">Phone Number</label>
                                <input type="tel" required placeholder="+1 (555) 000-0000" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                        </div>
                    </div>

                    <!-- Section 2: Service Selection -->
                    <div>
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-6); padding-bottom: var(--spacing-2); border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;"><span style="color: var(--color-primary);">2.</span> Request Service</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
                            <label class="srv-card" style="display: flex; align-items: center; gap: var(--spacing-3); padding: var(--spacing-4); border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onchange="document.querySelectorAll('.srv-card').forEach(c=>c.style.borderColor='var(--color-border)'); this.style.borderColor='var(--color-primary)';">
                                <input type="radio" name="service" value="day_pass" required style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <div><div style="font-weight: 600;">Day Pass</div><div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">$25 / day</div></div>
                            </label>
                            <label class="srv-card" style="display: flex; align-items: center; gap: var(--spacing-3); padding: var(--spacing-4); border: 1px solid var(--color-primary); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onchange="document.querySelectorAll('.srv-card').forEach(c=>c.style.borderColor='var(--color-border)'); this.style.borderColor='var(--color-primary)';">
                                <input type="radio" name="service" value="hot_desk" checked style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <div><div style="font-weight: 600;">Hot Desk</div><div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">$299 / mo</div></div>
                            </label>
                            <label class="srv-card" style="display: flex; align-items: center; gap: var(--spacing-3); padding: var(--spacing-4); border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onchange="document.querySelectorAll('.srv-card').forEach(c=>c.style.borderColor='var(--color-border)'); this.style.borderColor='var(--color-primary)';">
                                <input type="radio" name="service" value="dedicated_desk" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <div><div style="font-weight: 600;">Dedicated Desk</div><div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">$450 / mo</div></div>
                            </label>
                            <label class="srv-card" style="display: flex; align-items: center; gap: var(--spacing-3); padding: var(--spacing-4); border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onchange="document.querySelectorAll('.srv-card').forEach(c=>c.style.borderColor='var(--color-border)'); this.style.borderColor='var(--color-primary)';">
                                <input type="radio" name="service" value="private_office" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <div><div style="font-weight: 600;">Private Office</div><div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">From $800 / mo</div></div>
                            </label>
                            <label class="srv-card" style="display: flex; align-items: center; gap: var(--spacing-3); padding: var(--spacing-4); border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onchange="document.querySelectorAll('.srv-card').forEach(c=>c.style.borderColor='var(--color-border)'); this.style.borderColor='var(--color-primary)';">
                                <input type="radio" name="service" value="meeting_room" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <div><div style="font-weight: 600;">Meeting Room</div><div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">$40 / hour</div></div>
                            </label>
                        </div>
                    </div>

                    <!-- Section 3: Room Customization -->
                    <div>
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-6); padding-bottom: var(--spacing-2); border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;"><span style="color: var(--color-primary);">3.</span> Room Customization & Add-ons</h3>
                        <p class="text-muted" style="margin-bottom: var(--spacing-4); font-size: var(--font-size-sm);">Select any additional equipment or services you require.</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--spacing-3);">
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; padding: var(--spacing-3); background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid transparent; transition: border-color var(--transition-fast);" onmouseover="this.style.borderColor='var(--color-border)'" onmouseout="this.style.borderColor='transparent'">
                                <input type="checkbox" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <span style="font-weight: 500;">🪑 Ergonomic Chairs</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; padding: var(--spacing-3); background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid transparent; transition: border-color var(--transition-fast);" onmouseover="this.style.borderColor='var(--color-border)'" onmouseout="this.style.borderColor='transparent'">
                                <input type="checkbox" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <span style="font-weight: 500;">🖥️ Standing Desks</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; padding: var(--spacing-3); background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid transparent; transition: border-color var(--transition-fast);" onmouseover="this.style.borderColor='var(--color-border)'" onmouseout="this.style.borderColor='transparent'">
                                <input type="checkbox" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <span style="font-weight: 500;">📋 Smart Whiteboard</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; padding: var(--spacing-3); background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid transparent; transition: border-color var(--transition-fast);" onmouseover="this.style.borderColor='var(--color-border)'" onmouseout="this.style.borderColor='transparent'">
                                <input type="checkbox" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <span style="font-weight: 500;">📺 4K Screen Setup</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; padding: var(--spacing-3); background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid transparent; transition: border-color var(--transition-fast);" onmouseover="this.style.borderColor='var(--color-border)'" onmouseout="this.style.borderColor='transparent'">
                                <input type="checkbox" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <span style="font-weight: 500;">📶 Dedicated WiFi</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; padding: var(--spacing-3); background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid transparent; transition: border-color var(--transition-fast);" onmouseover="this.style.borderColor='var(--color-border)'" onmouseout="this.style.borderColor='transparent'">
                                <input type="checkbox" style="accent-color: var(--color-primary); width: 18px; height: 18px;">
                                <span style="font-weight: 500;">🎥 Video Conf. Cam</span>
                            </label>
                        </div>
                    </div>

                    <!-- Section 4: Payment -->
                    <div>
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-6); padding-bottom: var(--spacing-2); border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;"><span style="color: var(--color-primary);">4.</span> Payment Interface</h3>
                        <div style="display: flex; gap: var(--spacing-6);">
                            <label class="pay-card" style="flex: 1; display: flex; align-items: center; gap: var(--spacing-3); padding: var(--spacing-4); border: 2px solid var(--color-primary); border-radius: var(--radius-md); cursor: pointer; background: var(--color-surface);" onchange="document.querySelectorAll('.pay-card').forEach(c=>{c.style.borderColor='var(--color-border)'; c.style.borderWidth='1px';}); this.style.borderColor='var(--color-primary)'; this.style.borderWidth='2px';">
                                <input type="radio" name="payment" value="online" checked style="accent-color: var(--color-primary); width: 22px; height: 22px;">
                                <div><div style="font-weight: 700; font-size: var(--font-size-lg);">Pay Online</div><div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">Credit Card, Apple Pay</div></div>
                            </label>
                            <label class="pay-card" style="flex: 1; display: flex; align-items: center; gap: var(--spacing-3); padding: var(--spacing-4); border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; background: var(--color-surface);" onchange="document.querySelectorAll('.pay-card').forEach(c=>{c.style.borderColor='var(--color-border)'; c.style.borderWidth='1px';}); this.style.borderColor='var(--color-primary)'; this.style.borderWidth='2px';">
                                <input type="radio" name="payment" value="offline" style="accent-color: var(--color-primary); width: 22px; height: 22px;">
                                <div><div style="font-weight: 700; font-size: var(--font-size-lg);">Offline Payment</div><div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">Bank Transfer / Invoice</div></div>
                            </label>
                        </div>
                    </div>

                    <div style="padding-top: var(--spacing-6); border-top: 1px solid var(--color-border); display: flex; justify-content: flex-end;">
                        <button type="submit" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-4) var(--spacing-10); width: 100%;">Save Request & Process Booking</button>
                    </div>
                </form>
            </main>
        </div>
    `;
}
