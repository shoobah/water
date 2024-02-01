<script>
	import { getPossibleMoves, findAll, visited } from '$lib/calculations.js';

	var theGrid = [
		[0, 0, 2, 1, 3],
		[0, 1, 3, 0, 2],
		[2, 1, 1, 0, 1],
		[0, 2, 0, 0, 0],
		[0, 2, 3, 0, 2]
	];

	var rows = Array.from({ length: theGrid.length }, (_, i) => i);
	var cols = Array.from({ length: theGrid[0].length }, (_, i) => i);
	var startX = 1;
	var startY = 3;
	var pm = getPossibleMoves(theGrid, startX, startY);
	// @ts-ignore
	function checkMove(col, row) {
		return pm.some((cell) => cell.x === col && cell.y === row);
	}

	// @ts-ignore
	function checkVisited(col, row) {
		return visited.some((cell) => cell.x === col && cell.y === row);
	}

	var f = findAll(theGrid, startX, startY);
</script>

<div class="grid">
	{#each rows as row}
		{#each cols as col}
			<div
				style="grid-row: {row + 1}; grid-column: {col + 1};"
				class="cell"
				class:water={checkMove(col, row)}
				class:start={startX === col && startY === row}
				class:visited={checkVisited(col, row)}
			>
				<div>
					{theGrid[row][col]}
				</div>
			</div>
		{/each}
	{/each}
</div>

<style>
	:root {
		--cell-size: 60px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.grid {
		display: grid;
		grid-auto-columns: var(--cell-size);
		grid-auto-rows: var(--cell-size);
		gap: 0px 0px;
		grid-auto-flow: row;
	}

	.cell {
    display: grid;
    border: 1px solid black;
    font-size: 2em;
    justify-content: center;
    align-items: center;
	}
	.water {
		background-color: rgb(142, 142, 255);
	}

	.visited {
		background-color: rgb(142, 255, 142);
	}

	.start {
		background-color: rgb(255, 142, 142);
	}
</style>
