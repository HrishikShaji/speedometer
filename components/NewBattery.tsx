import React, { useState, useEffect } from "react";

export const NewBattery = () => {
	const [charging, setCharging] = useState(false);

	useEffect(() => {
		// Start the charging animation when component mounts
		setCharging(true);

		// Clean up the animation when component unmounts
		return () => {
			setCharging(false);
		};
	}, []);

	return (
		<div className="battery-container">
			<svg className="battery-svg" viewBox="0 0 100 200">
				{/* Battery shape */}
				<rect
					x="10"
					y="20"
					width="80"
					height="160"
					rx="8"
					ry="8"
					className="battery-body"
				/>

				{/* Battery terminals */}
				<circle cx="50" cy="10" r="4" className="battery-terminal" />
				<rect
					x="45"
					y="180"
					width="10"
					height="10"
					className="battery-terminal"
				/>

				{/* Charging animation */}
				{charging && (
					<animate
						attributeName="height"
						from="0"
						to="160"
						dur="2s"
						fill="freeze"
					/>
				)}
			</svg>
		</div>
	);
};
