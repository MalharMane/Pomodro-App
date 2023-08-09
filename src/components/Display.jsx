import { ReactComponent as StartIcon } from './icons/startIcon.svg';
import { ReactComponent as StopIcon } from './icons/stopIcon.svg';
import { ReactComponent as RefreshButton } from './icons/refreshButton.svg';

const TimeLeft = ({ isRunning, handlePlay, handleReset, timeFormatter, title }) => {
	return (
		<div className="w-full text-3xl flex flex-col items-center gap-5">
			<button  className="  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 " onClick={handleReset} id="reset"> 
			Reset 
			
			</button>

			
			<h2 id="timer-label">{title}</h2>
			<h3 className="text-8xl font-bold" id="time-left">
				{timeFormatter()}
			</h3>
			<button onClick={handlePlay} id="start_stop">
				{isRunning ? (
					<StopIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
				) : (
					<StartIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
				)}
			</button>
		</div>
	);
};

export default TimeLeft;
