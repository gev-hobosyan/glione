import React from "react";

/**
 * This component is a design element (the loading spinner that shows up while fetching information)
 */
const LoadingSpinner = () => {
	return (
		<>
			<div
				className={`animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto my-2`}
			></div>
		</>
	);
};

export default React.memo(LoadingSpinner);
