<script>
	// @ts-nocheck

	import { getPossibleMoves, findAll, visited } from '$lib/calculations.js';
	import { onMount } from 'svelte';

	var theGrid = undefined;
	var rows = undefined;
	var cols = undefined;
	var startX = 0;
	var startY = 0;
  var pm = undefined;

	function randomiseGrid() {
		const gridSize = Math.floor(Math.random() * 17) + 4;
		theGrid = Array.from({ length: gridSize }, () =>
			Array.from({ length: gridSize }, () => Math.floor(Math.random() * 11))
		);
		rows = Array.from({ length: theGrid.length }, (_, i) => i);
		cols = Array.from({ length: theGrid[0].length }, (_, i) => i);
		startX = Math.floor(Math.random() * gridSize);
		startY = Math.floor(Math.random() * gridSize);
		var pm = getPossibleMoves(theGrid, startX, startY);

		findAll(theGrid, startX, startY);
	}

	function checkVisited(col, row) {
		return visited?.some((cell) => cell.x === col && cell.y === row);
	}

	onMount(() => {
		randomiseGrid();
	});
</script>

<div class="grid">
	{#if rows && cols && theGrid}
		{#each rows as row}
			{#each cols as col}
				<div
					style="grid-row: {row + 1}; grid-column: {col + 1};"
					class="cell"
					class:start={startX === col && startY === row}
					class:visited={checkVisited(col, row)}
				>
					<div>
						{theGrid[row][col]}
					</div>
				</div>
			{/each}
		{/each}
	{/if}
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
  
	.visited {
    background-color: rgb(142, 142, 255);
  }
  
	.start {
		background-color: rgb(255, 142, 142);
	}
</style>
