import cn from 'classnames'
import { useTheme } from 'next-themes'
import React, { FC, useEffect, useState } from 'react'

import styles from './ThemeToggle.module.scss'

const ThemeToggle: FC = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<div className={styles.toggle}>
			<div className={styles.btnContainer}>
				<div onClick={() => setTheme('light')}>
					<button aria-label="svg-light">
						<svg
							width="26"
							height="26"
							viewBox="0 0 16 16"
							fill="black"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11ZM8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12V12ZM8 0C8.13261 0 8.25979 0.0526784 8.35355 0.146447C8.44732 0.240215 8.5 0.367392 8.5 0.5V2.5C8.5 2.63261 8.44732 2.75979 8.35355 2.85355C8.25979 2.94732 8.13261 3 8 3C7.86739 3 7.74021 2.94732 7.64645 2.85355C7.55268 2.75979 7.5 2.63261 7.5 2.5V0.5C7.5 0.367392 7.55268 0.240215 7.64645 0.146447C7.74021 0.0526784 7.86739 0 8 0V0ZM8 13C8.13261 13 8.25979 13.0527 8.35355 13.1464C8.44732 13.2402 8.5 13.3674 8.5 13.5V15.5C8.5 15.6326 8.44732 15.7598 8.35355 15.8536C8.25979 15.9473 8.13261 16 8 16C7.86739 16 7.74021 15.9473 7.64645 15.8536C7.55268 15.7598 7.5 15.6326 7.5 15.5V13.5C7.5 13.3674 7.55268 13.2402 7.64645 13.1464C7.74021 13.0527 7.86739 13 8 13V13ZM16 8C16 8.13261 15.9473 8.25979 15.8536 8.35355C15.7598 8.44732 15.6326 8.5 15.5 8.5H13.5C13.3674 8.5 13.2402 8.44732 13.1464 8.35355C13.0527 8.25979 13 8.13261 13 8C13 7.86739 13.0527 7.74021 13.1464 7.64645C13.2402 7.55268 13.3674 7.5 13.5 7.5H15.5C15.6326 7.5 15.7598 7.55268 15.8536 7.64645C15.9473 7.74021 16 7.86739 16 8ZM3 8C3 8.13261 2.94732 8.25979 2.85355 8.35355C2.75979 8.44732 2.63261 8.5 2.5 8.5H0.5C0.367392 8.5 0.240215 8.44732 0.146447 8.35355C0.0526784 8.25979 0 8.13261 0 8C0 7.86739 0.0526784 7.74021 0.146447 7.64645C0.240215 7.55268 0.367392 7.5 0.5 7.5H2.5C2.63261 7.5 2.75979 7.55268 2.85355 7.64645C2.94732 7.74021 3 7.86739 3 8ZM13.657 2.343C13.7507 2.43676 13.8034 2.56392 13.8034 2.6965C13.8034 2.82908 13.7507 2.95624 13.657 3.05L12.243 4.465C12.1965 4.51142 12.1413 4.54823 12.0806 4.57333C12.0199 4.59843 11.9548 4.61132 11.8891 4.61128C11.7565 4.61118 11.6293 4.55839 11.5355 4.4645C11.4891 4.41801 11.4523 4.36284 11.4272 4.30212C11.4021 4.24141 11.3892 4.17634 11.3892 4.11065C11.3893 3.97796 11.4421 3.85075 11.536 3.757L12.95 2.343C13.0438 2.24926 13.1709 2.19661 13.3035 2.19661C13.4361 2.19661 13.5632 2.24926 13.657 2.343V2.343ZM4.464 11.536C4.55774 11.6298 4.61039 11.7569 4.61039 11.8895C4.61039 12.0221 4.55774 12.1492 4.464 12.243L3.05 13.657C2.9557 13.7481 2.8294 13.7985 2.6983 13.7973C2.5672 13.7962 2.44179 13.7436 2.34909 13.6509C2.25639 13.5582 2.2038 13.4328 2.20266 13.3017C2.20152 13.1706 2.25192 13.0443 2.343 12.95L3.757 11.536C3.85076 11.4423 3.97792 11.3896 4.1105 11.3896C4.24308 11.3896 4.37024 11.4423 4.464 11.536V11.536ZM13.657 13.657C13.5632 13.7507 13.4361 13.8034 13.3035 13.8034C13.1709 13.8034 13.0438 13.7507 12.95 13.657L11.536 12.243C11.4449 12.1487 11.3945 12.0224 11.3957 11.8913C11.3968 11.7602 11.4494 11.6348 11.5421 11.5421C11.6348 11.4494 11.7602 11.3968 11.8913 11.3957C12.0224 11.3945 12.1487 11.4449 12.243 11.536L13.657 12.95C13.7507 13.0438 13.8034 13.1709 13.8034 13.3035C13.8034 13.4361 13.7507 13.5632 13.657 13.657ZM4.464 4.465C4.37024 4.55874 4.24308 4.61139 4.1105 4.61139C3.97792 4.61139 3.85076 4.55874 3.757 4.465L2.343 3.05C2.29524 3.00388 2.25715 2.9487 2.23095 2.8877C2.20474 2.8267 2.19095 2.76109 2.19037 2.6947C2.1898 2.62831 2.20245 2.56247 2.22759 2.50102C2.25273 2.43957 2.28986 2.38375 2.3368 2.3368C2.38375 2.28986 2.43957 2.25273 2.50102 2.22759C2.56247 2.20245 2.62831 2.1898 2.6947 2.19037C2.76109 2.19095 2.8267 2.20474 2.8877 2.23095C2.9487 2.25715 3.00388 2.29524 3.05 2.343L4.464 3.757C4.51056 3.80345 4.54751 3.85862 4.57271 3.91937C4.59792 3.98011 4.61089 4.04523 4.61089 4.111C4.61089 4.17677 4.59792 4.24189 4.57271 4.30263C4.54751 4.36338 4.51056 4.41855 4.464 4.465V4.465Z"
								fill="black"
							/>
						</svg>
					</button>
					<span>Светлая</span>
				</div>
				<div onClick={() => setTheme('dark')} className={styles.dark}>
					<button aria-label="svg-dark">
						<svg
							width="26"
							height="26"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
								fill="black"
							/>
						</svg>
					</button>
					<span>Темная</span>
				</div>
				<div className={cn(styles.bgActive, theme === 'dark' && styles.bgActiveDark)}></div>
			</div>
		</div>
	)
}

export default ThemeToggle
