// js/pages/profile.js

window.setRating = function(val) {
    const input = document.getElementById('rating-val');
    if (input) input.value = val;
    
    const stars = document.getElementById('star-rating').children;
    for (let i = 0; i < 5; i++) {
        stars[i].style.color = i < val ? '#f59e0b' : 'var(--color-border)';
    }
};

function renderProfile() {
    const historyHTML = `
        <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
            <div style="border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: 600; margin-bottom: 4px;">Private Office - Downtown Tech District</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">March 15, 2026 &bull; 9:00 AM - 5:00 PM</div>
                </div>
                <div class="badge" style="background: #ecfdf5; color: #10b981;">Completed</div>
            </div>
            <div style="border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: 600; margin-bottom: 4px;">Meeting Room A - Shoreditch Exchange</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">March 10, 2026 &bull; 2:00 PM - 4:00 PM</div>
                </div>
                <div class="badge" style="background: #ecfdf5; color: #10b981;">Completed</div>
            </div>
            <div style="border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: 600; margin-bottom: 4px;">Hot Desk - Marina Trade Center</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-muted);">March 01, 2026 &bull; 8:00 AM - 6:00 PM</div>
                </div>
                <div class="badge" style="background: #ecfdf5; color: #10b981;">Completed</div>
            </div>
        </div>
    `;

    return `
        <div style="padding: var(--spacing-8); max-width: 1000px; margin: 0 auto; padding-bottom: var(--spacing-12); animation: fadeIn var(--transition-normal);">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: var(--spacing-8);">
                <div>
                    <h1 class="text-h1" style="font-size: 2rem; margin-bottom: var(--spacing-2);">My Profile</h1>
                    <p class="text-muted">Manage your personal information, view booking history, and leave reviews.</p>
                </div>
                <button class="btn btn-primary" onclick="alert('Profile updated successfully!')">Save Changes</button>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: var(--spacing-8);">
                
                <!-- Profile Settings Sidebar -->
                <div style="display: flex; flex-direction: column; gap: var(--spacing-6);">
                    <div class="card card-body" style="text-align: center; padding: var(--spacing-8) var(--spacing-6);">
                        <div style="width: 100px; height: 100px; background: var(--color-primary-light); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 700; margin: 0 auto var(--spacing-4); box-shadow: var(--shadow-sm);">
                            ${window.authState.user.initials}
                        </div>
                        <h3 class="text-h3" style="margin-bottom: 4px;">${window.authState.user.name}</h3>
                        <p class="text-muted" style="margin-bottom: var(--spacing-4);">${window.authState.user.email}</p>
                        <div class="badge badge-primary" style="margin-bottom: var(--spacing-8);">${window.authState.user.role === 'admin' ? 'Administrator' : 'Premium Member'}</div>
                        
                        <div style="text-align: left; padding-top: var(--spacing-6); border-top: 1px solid var(--color-border);">
                            <div style="margin-bottom: var(--spacing-4);">
                                <label style="display: block; font-weight: 600; font-size: var(--font-size-sm); margin-bottom: 4px;">Phone Number</label>
                                <div style="color: var(--color-text-main);">+1 (555) 123-4567</div>
                            </div>
                            <div style="margin-bottom: var(--spacing-4);">
                                <label style="display: block; font-weight: 600; font-size: var(--font-size-sm); margin-bottom: 4px;">Company</label>
                                <div style="color: var(--color-text-main);">NexusSpace LLC</div>
                            </div>
                            <div>
                                <label style="display: block; font-weight: 600; font-size: var(--font-size-sm); margin-bottom: 4px;">Active Plan</label>
                                <div style="color: var(--color-text-main);">Dedicated Desk</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content Area -->
                <div style="display: flex; flex-direction: column; gap: var(--spacing-8);">
                    
                    <!-- Booking History -->
                    <div class="card card-body">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-6);">
                            <h3 class="text-h3" style="display: flex; align-items: center; gap: 8px;">
                                <span style="color: var(--color-primary);">📅</span> Past Bookings History
                            </h3>
                            <a href="#workspaces" class="btn btn-outline" style="padding: var(--spacing-2) var(--spacing-4); font-size: var(--font-size-sm);">Book Again</a>
                        </div>
                        ${historyHTML}
                    </div>
                    
                    <!-- Write a Review -->
                    <div class="card card-body">
                        <h3 class="text-h3" style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--spacing-2);">
                            <span style="color: #f59e0b;">⭐</span> Add a Review
                        </h3>
                        <p class="text-muted" style="margin-bottom: var(--spacing-6); font-size: var(--font-size-sm);">Share your experience at NexusSpace with others.</p>
                        
                        <form onsubmit="event.preventDefault(); alert('Thank you! Your review has been submitted for moderation.'); this.reset(); window.setRating(0);">
                            <div style="margin-bottom: var(--spacing-4);">
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2); font-size: var(--font-size-sm);">Location / Workspace</label>
                                <select required style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; background: white;">
                                    <option value="" disabled selected>Select a recent workspace...</option>
                                    <option>Downtown Tech District (Private Office)</option>
                                    <option>Shoreditch Exchange (Meeting Room A)</option>
                                    <option>Marina Trade Center (Hot Desk)</option>
                                </select>
                            </div>
                            
                            <div style="margin-bottom: var(--spacing-4);">
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2); font-size: var(--font-size-sm);">Rating</label>
                                <div style="display: flex; gap: 8px; font-size: 28px; color: var(--color-border); cursor: pointer; user-select: none;" id="star-rating">
                                    <span onclick="window.setRating(1)">★</span>
                                    <span onclick="window.setRating(2)">★</span>
                                    <span onclick="window.setRating(3)">★</span>
                                    <span onclick="window.setRating(4)">★</span>
                                    <span onclick="window.setRating(5)">★</span>
                                </div>
                                <input type="number" id="rating-val" min="1" max="5" required style="opacity: 0; width: 0; height: 0; position: absolute;">
                            </div>
                            
                            <div style="margin-bottom: var(--spacing-6);">
                                <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-2); font-size: var(--font-size-sm);">Your Review</label>
                                <textarea required placeholder="What did you love about your workspace?" rows="4" style="width: 100%; padding: var(--spacing-3); border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; resize: vertical;"></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit Review</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    `;
}
