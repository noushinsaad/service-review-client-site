const HowItWorks = () => {
    return (
        <div className="rounded-lg shadow-lg p-6 bg-blue-200 mx-10 space-y-4">
            <h2 className="text-3xl font-bold text-center mb-6">FAQ</h2>
            <div className="space-y-4">
                <div className="collapse collapse-arrow bg-blue-50">
                    <input type="radio" name="how-it-works-accordion" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How do I add a service?</div>
                    <div className="collapse-content">
                        <p>You can add a service by navigating to the &quot;Add Service&quot;
                            section in your dashboard. Fill in the required details such as the service title,
                            description, price, and other relevant information, then submit the form.
                            Your service will appear in the list after it is successfully added.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-50">
                    <input type="radio" name="how-it-works-accordion" />
                    <div className="collapse-title text-xl font-medium">Can I edit my reviews?</div>
                    <div className="collapse-content">
                        <p>Yes, you can edit your reviews by going to the &quot;My Reviews&quot; section in your account.
                            Locate the review you wish to edit, click the
                            &quot;Edit&quot; button, make the necessary changes, and save them. The updated review will replace the previous one.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-50">
                    <input type="radio" name="how-it-works-accordion" />
                    <div className="collapse-title text-xl font-medium">What happens if I delete my account?</div>
                    <div className="collapse-content">
                        <p>
                            Deleting your account will permanently remove your profile, services,
                            and reviews from the platform. This action cannot be undone, so make sure to save any necessary information before proceeding.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HowItWorks;