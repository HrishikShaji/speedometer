interface MeterSixProps {
	speed: number;
}

export const MeterSix: React.FC<MeterSixProps> = ({ speed }) => {
	return (
		<svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M339.5 120.3L323.6 150.5C325.5 151.6 327.5 152.7 329.4 153.9C331.4 155.2 333.4 156.5 335.4 157.8C337.4 159.2 339.3 160.5 341.2 162C343.1 163.4 345 164.9 346.8 166.5C348.6 168 350.4 169.6 352.2 171.2C354 172.8 355.7 174.5 357.4 176.2C359.1 177.9 360.7 179.6 362.4 181.4C364 183.2 365.6 185 367.1 186.8C368.6 188.6 370.1 190.5 371.6 192.4C372 193 372.5 193.6 372.9 194.2L401 174.8C384.8 152.4 363.8 133.8 339.5 120.3Z"
				fill="#9C57AC"
			/>
			<path
				d="M367.1 186.8C365.6 185 364 183.2 362.4 181.4C360.8 179.6 359.1 177.9 357.4 176.2C355.7 174.5 354 172.9 352.2 171.2C350.4 169.6 348.6 168 346.8 166.5C345 165 343.1 163.5 341.2 162C339.3 160.6 337.3 159.2 335.4 157.8C333.4 156.4 331.4 155.1 329.4 153.9C327.5 152.7 325.6 151.6 323.6 150.5L310.2 176C311.7 176.8 313.1 177.7 314.5 178.5C316.3 179.6 318.1 180.8 319.9 182C321.7 183.2 323.4 184.5 325.1 185.8C326.8 187.1 328.4 188.5 330.1 189.8C331.7 191.2 333.3 192.6 334.9 194.1C336.4 195.6 338 197.1 339.4 198.6C340.9 200.1 342.3 201.7 343.7 203.4C345.1 205 346.4 206.7 347.8 208.4C348.3 209.1 348.8 209.8 349.3 210.5L373 194.1C372.6 193.5 372.1 192.9 371.7 192.3C370.2 190.5 368.7 188.6 367.1 186.8Z"
				fill="#70447E"
			/>
			<path
				d="M377.9 201.4C378.5 202.3 379.1 203.3 379.7 204.2C381 206.2 382.2 208.3 383.3 210.4C384.5 212.5 385.6 214.6 386.6 216.7C387.7 218.8 388.7 221 389.6 223.2C390.6 225.4 391.5 227.6 392.3 229.8C393.2 232 394 234.3 394.7 236.6C395.5 238.9 396.2 241.2 396.8 243.5C397.5 245.8 398.1 248.1 398.6 250.4C399.1 252.7 399.6 255.1 400.1 257.4C400.4 259.2 400.7 261.1 401 262.9L434.9 258.8C430.9 231.4 421 205.1 405.8 181.9L377.9 201.4Z"
				fill="#9C57AC"
			/>
			<path
				d="M398.8 250.4C398.3 248.1 397.7 245.8 397 243.5C396.3 241.2 395.6 238.9 394.9 236.6C394.1 234.3 393.3 232.1 392.5 229.8C391.6 227.6 390.7 225.4 389.8 223.2C388.8 221 387.8 218.8 386.8 216.7C385.7 214.6 384.6 212.4 383.5 210.4C382.3 208.3 381.1 206.2 379.9 204.2C379.3 203.3 378.7 202.3 378.1 201.4L354.4 217.8C354.7 218.2 355 218.7 355.3 219.1C356.4 220.9 357.5 222.8 358.6 224.6C359.6 226.5 360.6 228.4 361.6 230.3C362.5 232.2 363.4 234.2 364.3 236.1C365.1 238.1 365.9 240 366.7 242.1C367.4 244.1 368.1 246.1 368.8 248.2C369.4 250.2 370 252.3 370.6 254.4C371.1 256.5 371.6 258.6 372 260.6C372.4 262.6 372.8 264.5 373.1 266.5L401.7 263C401.4 261.2 401.1 259.3 400.8 257.5C399.9 255.1 399.4 252.8 398.8 250.4Z"
				fill="#70447E"
			/>
			<path
				d="M402.3 271.6C402.5 274.1 402.7 276.4 402.8 278.8C402.9 281.2 403 283.6 403 286C403 292.8 402.6 299.6 401.7 306.3C400.8 313 399.5 319.7 397.7 326.2C396.6 329.8 395.4 333.4 394.1 336.9L426.1 349C433.3 328.8 437 307.5 437.1 286C437.1 279.8 436.8 273.6 436.2 267.5L402.3 271.6Z"
				fill="#9C57AC"
			/>
			<path
				d="M402.3 271.7L373.7 275.1C373.8 276.6 374 278.1 374 279.6C374.1 281.7 374.2 283.9 374.2 286C374.2 292 373.8 298 372.9 304C372 310 370.8 315.9 369.1 321.6C368.5 323.3 367.9 325 367.2 326.6L394.1 336.8C395.4 333.3 396.6 329.7 397.7 326.1C399.5 319.6 400.8 312.9 401.7 306.2C402.6 299.5 403 292.7 403 285.9C403 283.5 402.9 281.1 402.8 278.7C402.7 276.4 402.5 274.1 402.3 271.7Z"
				fill="#70447E"
			/>
			<path
				d="M391.1 345.4C388.5 351.7 385.5 357.8 382.1 363.6C378.7 369.5 374.9 375.1 370.8 380.5C366.7 385.9 362.2 391 357.4 395.8C356.2 396.9 354.9 398 353.6 399.1L376.3 424.7C396.6 405.9 412.5 382.8 422.9 357.1L391.2 345.1C391.2 345.2 391.2 345.3 391.1 345.4Z"
				fill="#9C57AC"
			/>
			<path
				d="M362.7 338.6C360.2 344.1 357.3 349.4 354 354.4C350.7 359.5 347.1 364.3 343.2 368.9C340.4 371.9 337.5 374.8 334.5 377.6L353.6 399.2C354.9 398.1 356.1 397 357.4 395.9C362.2 391.1 366.7 386 370.8 380.6C374.9 375.2 378.7 369.6 382.1 363.7C385.5 357.8 388.5 351.7 391.1 345.5C391.1 345.4 391.2 345.3 391.2 345.2L364.1 334.9C363.7 336.1 363.2 337.3 362.7 338.6Z"
				fill="#70447E"
			/>
			<path
				d="M124.4 380.6C120.3 375.2 116.5 369.6 113.1 363.7C109.7 357.8 106.7 351.7 104.1 345.5C104.1 345.4 104 345.3 104 345.2L72.2998 357.2C82.6998 382.9 98.5998 405.9 118.9 424.8L141.6 399.2C140.3 398.1 139.1 397 137.8 395.9C133 391 128.6 385.9 124.4 380.6Z"
				fill="#9C57AC"
			/>
			<path
				d="M141.2 354.4C137.9 349.3 135.1 344 132.5 338.6C132 337.4 131.6 336.1 131.1 334.9L104 345.1C104 345.2 104.1 345.3 104.1 345.4C106.7 351.7 109.7 357.8 113.1 363.6C116.5 369.5 120.3 375.1 124.4 380.5C128.5 385.9 133 391 137.8 395.8C139 396.9 140.3 398 141.6 399.1L160.7 377.5C157.7 374.7 154.8 371.8 152 368.8C148.1 364.3 144.5 359.5 141.2 354.4Z"
				fill="#70447E"
			/>
			<path
				d="M93.6998 306.3C92.7998 299.6 92.3998 292.8 92.3998 286C92.4998 281.2 92.7998 276.4 93.2998 271.6L59.3998 267.5C58.6998 273.6 58.3998 279.8 58.2998 286C58.3998 307.5 62.0998 328.8 69.2998 349L101.3 336.9C99.9998 333.4 98.7998 329.8 97.6998 326.2C95.8998 319.7 94.4998 313 93.6998 306.3Z"
				fill="#9C57AC"
			/>
			<path
				d="M122.4 304C121.5 298 121.1 292 121.1 286C121.2 282.4 121.5 278.7 121.9 275.1L93.2999 271.6C92.7999 276.4 92.4999 281.2 92.3999 286C92.3999 292.8 92.7999 299.6 93.6999 306.3C94.5999 313 95.8999 319.7 97.6999 326.2C98.7999 329.8 99.9999 333.4 101.3 336.9L128.2 326.7C127.5 325 126.9 323.4 126.3 321.7C124.6 315.9 123.3 310 122.4 304Z"
				fill="#70447E"
			/>
			<path
				d="M60.3999 258.9L94.1999 263C94.9999 257.2 96.1999 251.5 97.5999 245.8C99.3999 239.3 101.5 232.8 104.1 226.6C106.7 220.3 109.7 214.3 113.1 208.4C114.6 206.1 116.1 203.8 117.6 201.6L89.3999 182.2C74.2999 205.3 64.3999 231.5 60.3999 258.9Z"
				fill="#9C57AC"
			/>
			<path
				d="M113.1 208.3C109.7 214.2 106.7 220.3 104.1 226.5C101.5 232.8 99.3002 239.2 97.6002 245.7C96.1002 251.4 95.0002 257.1 94.2002 262.9L122.7 266.4C123.5 261 124.7 255.6 126.2 250.3C127.9 244.5 130 238.9 132.5 233.4C135 228 137.8 222.7 141.1 217.7L117.6 201.5C116.1 203.8 114.6 206 113.1 208.3Z"
				fill="#70447E"
			/>
			<path
				d="M94.3999 175L122.5 194.4C123.1 193.4 123.8 192.5 124.4 191.5C128.5 186.1 133 181 137.8 176.2C142.6 171.4 147.7 166.9 153.1 162.8C158.5 158.7 164.1 154.9 170 151.5C170.6 151.2 171.1 150.9 171.7 150.7L155.9 120.6C131.7 134 110.7 152.5 94.3999 175Z"
				fill="#9C57AC"
			/>
			<path
				d="M170 151.5C164.1 154.9 158.5 158.7 153.1 162.8C147.7 166.9 142.6 171.4 137.8 176.2C133 181 128.5 186.1 124.4 191.5C123.7 192.5 123.1 193.4 122.5 194.4L146.3 210.8C148.1 208.2 150 205.6 152 203.2C155.9 198.6 160.2 194.4 164.8 190.4C169.4 186.5 174.2 182.8 179.2 179.6C181.1 178.5 183.1 177.4 185.1 176.4L171.6 150.7C171.1 150.9 170.6 151.2 170 151.5Z"
				fill="#70447E"
			/>
			<path
				d="M179.5 146.8C182.4 145.3 185.3 143.8 188.2 142.5C194.5 139.9 200.9 137.7 207.4 136C213.9 134.2 220.6 132.9 227.3 132C232.6 131.4 237.9 131 243.2 131V96.8C215.5 97.4 188.3 104.2 163.5 116.5L179.5 146.8Z"
				fill="#9C57AC"
			/>
			<path
				d="M207.5 136C201 137.8 194.5 139.9 188.3 142.5C185.3 143.8 182.4 145.3 179.6 146.8L192.9 172.2C193.7 171.8 194.4 171.4 195.2 171C200.7 168.5 206.3 166.4 212.1 164.7C217.9 163 223.8 161.7 229.7 160.9C234.2 160.3 238.8 160 243.4 159.9V131C238.1 131.1 232.8 131.4 227.5 132C220.7 132.9 214 134.2 207.5 136Z"
				fill="#70447E"
			/>
			<path
				d="M303.8 141.2C301.6 140.3 299.3 139.5 297.1 138.8C294.8 138 292.5 137.3 290.2 136.7C287.9 136 285.6 135.4 283.3 134.9C281 134.4 278.6 133.9 276.3 133.4C273.9 133 271.6 132.6 269.2 132.2C266.8 131.9 264.5 131.6 262.1 131.4C259.7 131.2 257.3 131 254.9 130.9C254 130.9 253 130.8 252.1 130.8V159.6C252.8 159.6 253.5 159.6 254.2 159.6C256.3 159.7 258.5 159.9 260.6 160.1C262.7 160.3 264.8 160.6 267 160.9C269.1 161.2 271.2 161.6 273.3 162C275.4 162.4 277.5 162.9 279.5 163.5C281.6 164 283.6 164.6 285.7 165.3C287.7 165.9 289.8 166.6 291.8 167.4C293.8 168.1 295.8 168.9 297.8 169.8C299.5 170.5 301.2 171.3 302.8 172.1L316.2 146.6C314.4 145.7 312.5 144.8 310.6 144C308.2 143 306 142 303.8 141.2Z"
				fill="#70447E"
			/>
			<path
				d="M252 130.8C252.9 130.8 253.9 130.8 254.8 130.9C257.2 131 259.6 131.2 262 131.4C264.4 131.6 266.8 131.9 269.1 132.2C271.5 132.5 273.8 132.9 276.2 133.4C278.6 133.8 280.9 134.3 283.2 134.9C285.5 135.4 287.8 136.1 290.1 136.7C292.4 137.4 294.7 138.1 297 138.8C299.3 139.6 301.5 140.4 303.7 141.2C305.9 142.1 308.1 143 310.3 143.9C312.2 144.7 314 145.6 315.9 146.5L331.8 116.3C307 104 279.7 97.3 252 96.7V130.8Z"
				fill="#9C57AC"
			/>
			<path
				d="M343.6 203.6C342.2 202 340.8 200.4 339.3 198.8C337.8 197.3 336.3 195.7 334.8 194.3C333.3 192.8 331.7 191.4 330 190C328.4 188.6 326.7 187.3 325 186C323.3 184.7 321.6 183.4 319.8 182.2C318 181 316.3 179.8 314.4 178.7C313 177.8 311.5 177 310.1 176.2L287.7 218.9C296.1 223.9 303.4 230.4 309.4 238.1L349.1 210.7C348.6 210 348.1 209.3 347.6 208.6C346.4 206.9 345 205.2 343.6 203.6Z"
				fill="#483153"
			/>
			<path
				d="M370.1 254.3C369.6 252.2 369 250.2 368.3 248.1C367.7 246.1 367 244 366.2 242C365.5 240 364.7 238 363.8 236C363 234 362.1 232.1 361.1 230.2C360.2 228.3 359.2 226.4 358.1 224.5C357.1 222.6 356 220.8 354.8 219C354.5 218.6 354.2 218.1 353.9 217.7L314.2 245.1C319.3 253.4 322.8 262.6 324.5 272.2L372.4 266.4C372.1 264.4 371.7 262.4 371.3 260.5C371.2 258.4 370.7 256.4 370.1 254.3Z"
				fill="#483153"
			/>
			<path
				d="M373.7 275.1L325.9 280.9C326 282.6 326.1 284.3 326.1 286C326.1 294 324.8 302 322.3 309.6L367.3 326.7C368 325 368.6 323.4 369.2 321.7C370.9 315.9 372.2 310 373 304.1C373.9 298.1 374.3 292.1 374.3 286.1C374.3 284 374.2 281.8 374.1 279.7C373.9 278.1 373.8 276.6 373.7 275.1Z"
				fill="#483153"
			/>
			<path
				d="M302.7 341.6L334.6 377.6C337.6 374.8 340.5 371.9 343.3 368.9C347.2 364.3 350.9 359.5 354.1 354.4C357.4 349.3 360.2 344 362.8 338.6C363.3 337.4 363.7 336.1 364.2 334.9L319.2 317.8C315.2 326.7 309.6 334.7 302.7 341.6Z"
				fill="#483153"
			/>
			<path
				d="M131.2 334.8C131.6 336.1 132.1 337.3 132.6 338.5C135.1 344 138 349.3 141.3 354.3C144.6 359.4 148.2 364.2 152.1 368.8C154.9 371.8 157.8 374.7 160.8 377.5L192.7 341.5C185.8 334.7 180.2 326.6 176.3 317.7L131.2 334.8Z"
				fill="#483153"
			/>
			<path
				d="M169.6 280.9L121.9 275.1C121.5 278.7 121.2 282.4 121.1 286C121.1 292 121.5 298 122.4 304C123.3 310 124.5 315.9 126.2 321.6C126.8 323.3 127.4 325 128.1 326.6L173.1 309.6C170.6 302 169.3 294 169.3 286C169.3 284.3 169.5 282.6 169.6 280.9Z"
				fill="#483153"
			/>
			<path
				d="M132.6 233.4C130.1 238.9 128 244.5 126.3 250.3C124.8 255.6 123.6 261 122.8 266.4L170.7 272.2C172.4 262.6 175.9 253.4 181 245.1L141.2 217.6C137.9 222.8 135 228 132.6 233.4Z"
				fill="#483153"
			/>
			<path
				d="M179.3 179.6C174.2 182.9 169.4 186.5 164.9 190.4C160.3 194.3 156.1 198.6 152.1 203.2C150.1 205.7 148.2 208.2 146.4 210.8L185.9 238.1C191.9 230.4 199.2 223.9 207.6 218.9L185.3 176.4C183.2 177.4 181.2 178.4 179.3 179.6Z"
				fill="#483153"
			/>
			<path
				d="M212 164.6C206.2 166.3 200.6 168.4 195.1 170.9C194.3 171.3 193.6 171.7 192.8 172.1L215.2 214.8C224.1 210.8 233.6 208.4 243.3 207.9V159.8C238.7 159.9 234.2 160.2 229.6 160.8C223.7 161.6 217.8 162.9 212 164.6Z"
				fill="#483153"
			/>
			<path
				d="M291.6 167.4C289.6 166.7 287.6 166 285.5 165.3C283.5 164.7 281.4 164.1 279.3 163.5C277.2 163 275.1 162.5 273.1 162C271 161.6 268.9 161.2 266.8 160.9C264.7 160.6 262.6 160.3 260.4 160.1C258.3 159.9 256.1 159.7 254 159.6C253.3 159.6 252.6 159.6 251.9 159.6V207.8C261.6 208.3 271.2 210.7 280.1 214.7L302.5 172C300.8 171.2 299.2 170.4 297.5 169.7C295.6 168.9 293.6 168.1 291.6 167.4Z"
				fill="#483153"
			/>
			<path
				d="M247.7 268.5C237.9 268.5 230 276.3 230 286C230 295.6 237.9 303.5 247.7 303.5C257.5 303.5 265.4 295.7 265.4 286C265.3 276.4 257.4 268.5 247.7 268.5Z"
				fill="#E04644"
			/>
			<path
				d="M247.7 279.1C243.8 279.1 240.7 282.2 240.7 286C240.7 289.8 243.8 292.9 247.7 292.9C251.6 292.9 254.7 289.8 254.7 286C254.6 282.2 251.5 279.1 247.7 279.1Z"
				fill="#E5E5E5"
			/>
			<path
				d="M448.3 200L440.1 219.3H437.4L445.8 200.2H434.3V198H448.4V200H448.3Z"
				fill="#E5E5E5"
			/>
			<path
				d="M384.1 115.7C382.3 115.7 381 116.4 380.2 117.7C379.3 119.1 378.9 121.3 378.9 124.4C379.4 123.4 380.1 122.6 381.2 122C382.3 121.4 383.4 121.1 384.7 121.1C386.7 121.1 388.4 121.7 389.6 123C390.8 124.3 391.4 126 391.4 128.3C391.4 129.6 391.1 130.9 390.6 131.9C390.1 133 389.3 133.8 388.2 134.5C387.1 135.1 385.9 135.4 384.4 135.4C382.4 135.4 380.8 134.9 379.6 134C378.5 133.1 377.7 131.8 377.2 130.2C376.7 128.6 376.5 126.6 376.5 124.3C376.5 117 379 113.4 384.1 113.4C386 113.4 387.6 113.9 388.7 115C389.8 116 390.5 117.4 390.7 119H388.2C387.7 116.8 386.4 115.7 384.1 115.7ZM381.7 123.9C380.9 124.2 380.3 124.8 379.9 125.5C379.5 126.2 379.2 127.1 379.2 128.1C379.2 129.6 379.6 130.8 380.5 131.8C381.4 132.8 382.6 133.2 384.2 133.2C385.6 133.2 386.7 132.8 387.5 131.9C388.3 131 388.7 129.9 388.7 128.4C388.7 126.9 388.3 125.6 387.5 124.8C386.7 123.9 385.6 123.5 384 123.5C383.3 123.4 382.5 123.5 381.7 123.9Z"
				fill="#E5E5E5"
			/>
			<path
				d="M306.7 70.2H296.3V77C296.8 76.4 297.4 75.8 298.3 75.4C299.2 75 300.1 74.8 301.2 74.8C302.8 74.8 304.2 75.1 305.2 75.8C306.2 76.5 307 77.4 307.4 78.4C307.8 79.5 308.1 80.6 308.1 81.8C308.1 83.2 307.8 84.5 307.3 85.6C306.8 86.7 306 87.6 304.9 88.3C303.8 89 302.4 89.3 300.8 89.3C298.7 89.3 297 88.8 295.8 87.7C294.6 86.6 293.7 85.2 293.5 83.4H296.1C296.4 84.5 296.9 85.4 297.7 86C298.5 86.6 299.6 86.9 300.8 86.9C302.4 86.9 303.5 86.4 304.3 85.5C305.1 84.6 305.5 83.3 305.5 81.8C305.5 80.3 305.1 79.1 304.3 78.2C303.5 77.4 302.3 76.9 300.8 76.9C299.8 76.9 298.8 77.2 298.1 77.7C297.4 78.2 296.8 78.9 296.4 79.8H293.8V67.8H306.7V70.2Z"
				fill="#E5E5E5"
			/>
			<path
				d="M185.7 86.2V84.2L196.1 69.8H199.3V83.9H202.3V86.2H199.3V91H196.6V86.2H185.7ZM196.8 72.6L188.8 83.9H196.8V72.6Z"
				fill="#E5E5E5"
			/>
			<path
				d="M101.3 119.1C102.6 118.1 104.2 117.6 106.2 117.6C107.5 117.6 108.7 117.8 109.7 118.3C110.7 118.8 111.4 119.4 111.9 120.3C112.4 121.1 112.7 122.1 112.7 123.1C112.7 124.3 112.3 125.4 111.6 126.3C110.9 127.2 110 127.8 108.9 128V128.1C110.2 128.4 111.2 129 112 130C112.8 130.9 113.1 132.1 113.1 133.6C113.1 134.7 112.8 135.7 112.3 136.6C111.8 137.5 111 138.2 110 138.7C109 139.2 107.7 139.5 106.3 139.5C104.2 139.5 102.5 139 101.1 137.9C99.7998 136.8 98.9998 135.2 98.7998 133.2H101.4C101.5 134.4 102 135.4 102.9 136.1C103.7 136.9 104.8 137.2 106.2 137.2C107.6 137.2 108.6 136.8 109.4 136.1C110.1 135.4 110.5 134.4 110.5 133.3C110.5 131.8 110 130.7 109 130.1C108 129.4 106.5 129.1 104.5 129.1H103.8V127H104.5C106.3 127 107.7 126.7 108.6 126.1C109.5 125.5 110 124.6 110 123.4C110 122.4 109.7 121.5 109 120.9C108.3 120.3 107.3 120 106.1 120C104.9 120 103.9 120.3 103.1 120.9C102.3 121.5 101.9 122.4 101.8 123.5H99.1998C99.2998 121.5 99.9998 120.1 101.3 119.1Z"
				fill="#E5E5E5"
			/>
			<path
				d="M45.4 214C46.8 212.7 48 211.4 49 209.9C50 208.5 50.5 207.1 50.5 205.7C50.5 204.4 50.2 203.4 49.6 202.7C49 202 48 201.6 46.6 201.6C45.3 201.6 44.2 202 43.5 202.9C42.8 203.7 42.4 204.9 42.3 206.3H39.7C39.8 204.1 40.5 202.4 41.7 201.2C43 200 44.6 199.4 46.6 199.4C48.6 199.4 50.3 200 51.5 201.1C52.7 202.2 53.3 203.8 53.3 205.8C53.3 207.4 52.8 209 51.8 210.6C50.8 212.2 49.7 213.5 48.5 214.7C47.3 215.9 45.7 217.2 43.7 218.8H53.9V221.1H39.5V219C42 217 43.9 215.3 45.4 214Z"
				fill="#E5E5E5"
			/>
			<path
				d="M37.7998 300.4V297.9H43.3998V319.3H40.6998V300.3H37.7998V300.4Z"
				fill="#E5E5E5"
			/>
			<path
				d="M66.4998 395.6C67.5998 393.7 69.4998 392.7 72.2998 392.7C74.9998 392.7 76.9998 393.7 78.0998 395.6C79.1998 397.5 79.7998 400.2 79.7998 403.6C79.7998 407.1 79.1998 409.8 78.0998 411.7C76.9998 413.6 75.0998 414.6 72.2998 414.6C69.4998 414.6 67.5998 413.6 66.4998 411.7C65.3998 409.8 64.7998 407.1 64.7998 403.6C64.7998 400.2 65.3998 397.5 66.4998 395.6ZM76.6998 399.2C76.4998 398 75.9998 397 75.2998 396.3C74.5998 395.6 73.5998 395.2 72.2998 395.2C70.9998 395.2 69.8998 395.6 69.1998 396.3C68.4998 397 67.9998 398 67.7998 399.2C67.5998 400.4 67.4998 401.9 67.4998 403.6C67.4998 405.4 67.5998 406.9 67.7998 408.1C67.9998 409.3 68.4998 410.3 69.1998 411C69.8998 411.7 70.8998 412.1 72.2998 412.1C73.5998 412.1 74.5998 411.7 75.2998 411C75.9998 410.3 76.4998 409.3 76.6998 408.1C76.8998 406.9 76.9998 405.4 76.9998 403.6C77.0998 401.9 76.8998 400.4 76.6998 399.2Z"
				fill="#E5E5E5"
			/>
			<path
				d="M416.4 415.8C417.1 416.4 418.1 416.7 419.3 416.7C420.9 416.7 422.2 416.1 422.9 414.8C423.7 413.5 424.1 411.3 424 408.3C423.6 409.2 422.9 409.9 421.9 410.4C420.9 410.9 419.9 411.2 418.7 411.2C417.4 411.2 416.2 410.9 415.2 410.4C414.2 409.9 413.3 409.1 412.8 408C412.2 407 411.9 405.7 411.9 404.2C411.9 402.1 412.5 400.4 413.7 399.1C414.9 397.8 416.7 397.2 418.9 397.2C421.7 397.2 423.6 398.1 424.7 399.9C425.8 401.7 426.4 404.4 426.4 407.9C426.4 410.4 426.2 412.4 425.7 414.1C425.3 415.7 424.5 417 423.4 417.8C422.3 418.7 420.9 419.1 419.1 419.1C417.1 419.1 415.5 418.6 414.4 417.5C413.3 416.4 412.6 415 412.5 413.3H415C415.2 414.3 415.6 415.2 416.4 415.8ZM422.4 407.6C423.2 406.8 423.7 405.7 423.7 404.3C423.7 402.8 423.3 401.6 422.5 400.7C421.7 399.8 420.5 399.3 419 399.3C417.6 399.3 416.5 399.7 415.7 400.6C414.9 401.5 414.5 402.6 414.5 404C414.5 405.4 414.9 406.6 415.7 407.5C416.5 408.4 417.7 408.8 419.2 408.8C420.5 408.9 421.6 408.5 422.4 407.6Z"
				fill="#E5E5E5"
			/>
			<path
				d="M447.8 311.1C447.2 310.3 446.9 309.3 446.9 308.1C446.9 307 447.2 306.1 447.7 305.2C448.2 304.3 449 303.7 450.1 303.2C451.2 302.7 452.4 302.4 453.9 302.4C455.4 302.4 456.7 302.7 457.7 303.2C458.8 303.7 459.6 304.4 460.1 305.2C460.6 306.1 460.9 307 460.9 308.1C460.9 309.2 460.6 310.3 460 311.1C459.4 311.9 458.5 312.6 457.5 313C458.7 313.4 459.7 314 460.4 315C461.1 316 461.5 317.1 461.5 318.4C461.5 319.7 461.2 320.8 460.6 321.8C460 322.8 459.1 323.5 457.9 324C456.7 324.5 455.4 324.8 453.9 324.8C452.4 324.8 451.1 324.5 449.9 324C448.8 323.5 447.9 322.7 447.2 321.8C446.6 320.8 446.3 319.7 446.3 318.4C446.3 317.1 446.7 315.9 447.4 315C448.1 314.1 449.1 313.4 450.3 313C449.2 312.5 448.4 311.9 447.8 311.1ZM450.3 315.2C449.4 315.9 448.9 316.9 448.9 318.3C448.9 319.6 449.4 320.6 450.2 321.4C451.1 322.2 452.3 322.6 453.8 322.6C455.3 322.6 456.5 322.2 457.4 321.4C458.3 320.6 458.7 319.6 458.7 318.3C458.7 317 458.2 316 457.3 315.3C456.4 314.6 455.2 314.2 453.7 314.2C452.5 314.1 451.3 314.5 450.3 315.2ZM457.2 305.6C456.4 304.9 455.3 304.6 453.9 304.6C452.5 304.6 451.5 304.9 450.7 305.6C449.9 306.3 449.5 307.2 449.5 308.4C449.5 309.5 449.9 310.4 450.7 311.1C451.5 311.8 452.6 312.1 453.9 312.1C455.2 312.1 456.3 311.8 457.1 311.1C457.9 310.4 458.3 309.5 458.3 308.4C458.4 307.2 458 306.2 457.2 305.6Z"
				fill="#E5E5E5"
			/>
			<path
				style={{
					transform: `rotate(${speed}deg)`,
					transformBox: "fill-box",
					transformOrigin: "bottom",
				}}
				d="M245.55 233.581C246.022 231.505 248.979 231.505 249.45 233.581L259.445 277.557C259.729 278.808 258.778 280 257.495 280H237.506C236.222 280 235.271 278.808 235.555 277.557L245.55 233.581Z"
				fill="blue"
			/>
		</svg>
	);
};
