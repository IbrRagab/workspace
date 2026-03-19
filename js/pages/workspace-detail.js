function renderWorkspaceDetail() {
    return `
        <div>
            <div style="display: flex; align-items: center; gap: var(--spacing-2); margin-bottom: var(--spacing-6);">
                <a href="#workspaces" class="btn btn-ghost" style="padding: var(--spacing-2); margin-left: calc(-1 * var(--spacing-2));">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </a>
                <span class="text-muted" style="font-weight: 500;">Back to Locations</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--spacing-8);">
                <!-- Main Content -->
                <div>
                    <!-- Image Gallery -->
                    <div style="margin-bottom: var(--spacing-8);">
                        <div style="height: 400px; border-radius: var(--radius-xl); overflow: hidden; margin-bottom: var(--spacing-4);">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Focus Room A" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-4);">
                            <div style="height: 100px; border-radius: var(--radius-md); overflow: hidden; cursor: pointer; border: 2px solid var(--color-primary);"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;"></div>
                            <div style="height: 100px; border-radius: var(--radius-md); overflow: hidden; cursor: pointer; opacity: 0.7; transition: opacity var(--transition-fast);" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7"><img src="https://images.unsplash.com/photo-1571401835393-8bfeaf666c89?auto=format&fit=crop&q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;"></div>
                            <div style="height: 100px; border-radius: var(--radius-md); overflow: hidden; cursor: pointer; opacity: 0.7; transition: opacity var(--transition-fast);" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7"><img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;"></div>
                            <div style="height: 100px; border-radius: var(--radius-md); overflow: hidden; cursor: pointer; opacity: 0.7; transition: opacity var(--transition-fast); position: relative;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;">
                                <div style="position: absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); color:white; display:flex; align-items:center; justify-content:center; font-weight:600;">+3</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Details -->
                    <div style="margin-bottom: var(--spacing-8);">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-4);">
                            <div>
                                <h1 class="text-h1" style="margin-bottom: var(--spacing-2);">Focus Room A</h1>
                                <p class="text-muted" style="font-size: var(--font-size-lg);">Downtown Tech Hub &middot; Floor 4</p>
                            </div>
                            <div class="badge badge-success" style="padding: var(--spacing-2) var(--spacing-3);">Available Now</div>
                        </div>
                        
                        <p style="font-size: var(--font-size-lg); line-height: 1.6; margin-bottom: var(--spacing-6); color: var(--color-text-main);">
                            A highly sought-after private soundproof pod perfect for crucial video blocks, deep work sprints, and sensitive phone calls. Features custom ergonomic Herman Miller seating and fully adjustable lighting to match your workflow.
                        </p>
                        
                        <!-- Amenities -->
                        <h3 class="text-h3" style="margin-bottom: var(--spacing-4);">Included Amenities</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
                            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-full); background: var(--color-background); display: flex; align-items: center; justify-content: center; color: var(--color-text-main);">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <span style="font-weight: 500;">Dual 27" 4K Monitors</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-full); background: var(--color-background); display: flex; align-items: center; justify-content: center; color: var(--color-text-main);">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <span style="font-weight: 500;">Acoustic Soundproofing</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-full); background: var(--color-background); display: flex; align-items: center; justify-content: center; color: var(--color-text-main);">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <span style="font-weight: 500;">High-Speed Wi-Fi</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                                <div style="width: 32px; height: 32px; border-radius: var(--radius-full); background: var(--color-background); display: flex; align-items: center; justify-content: center; color: var(--color-text-main);">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                                </div>
                                <span style="font-weight: 500;">Climate Control</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Booking Sidebar -->
                <div>
                    <div class="card card-body" style="position: sticky; top: var(--spacing-4);">
                        <div style="font-size: var(--font-size-3xl); font-weight: 700; color: var(--color-primary); margin-bottom: var(--spacing-2);">$15<span style="font-size: var(--font-size-sm); color: var(--color-text-muted); font-weight: 400;">/hour</span></div>
                        <p class="text-muted" style="font-size: var(--font-size-sm); margin-bottom: var(--spacing-6);">Minimum booking: 1 hour.</p>
                        
                        <div style="margin-bottom: var(--spacing-4);">
                            <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2);">Date</label>
                            <input type="date" value="2026-03-18" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: var(--font-size-sm);">
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-3); margin-bottom: var(--spacing-6);">
                            <div>
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2);">Start Time</label>
                                <select style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: var(--font-size-sm); background: white;">
                                    <option>09:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option selected>11:00 AM</option>
                                    <option>12:00 PM</option>
                                </select>
                            </div>
                            <div>
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2);">End Time</label>
                                <select style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: var(--font-size-sm); background: white;">
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option selected>01:00 PM</option>
                                </select>
                            </div>
                        </div>
                        
                        <div style="border-top: 1px solid var(--color-border); padding-top: var(--spacing-4); margin-bottom: var(--spacing-6);">
                            <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
                                <span class="text-muted">$15 x 2 hours</span>
                                <span>$30.00</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
                                <span class="text-muted">Service Fee</span>
                                <span>$0.00</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: var(--font-size-lg); margin-top: var(--spacing-4);">
                                <span>Total</span>
                                <span>$30.00</span>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary" style="width: 100%; font-size: var(--font-size-lg);" onclick="alert('Booking confirmed! Payment successful.')">Confirm Booking</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
