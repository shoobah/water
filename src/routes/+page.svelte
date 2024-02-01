<script>
  import { getPossibleMoves, findAll, visited } from '$lib/calculations.js';
  
	var theGrid = [
    [0, 0, 2, 1],
		[0, 1, 3, 0],
		[0, 1, 1, 0],
		[0, 2, 0, 0]
	];
  
	var rows = Array.from({ length: theGrid.length }, (_, i) => i);
	var cols = Array.from({ length: theGrid[0].length }, (_, i) => i);
  var startX = 1;
  var startY = 3;
	var pm = getPossibleMoves(theGrid, startX, startY);
  // @ts-ignore
  function checkMove(col, row) { 
    return pm.some((cell) => cell.x===col && cell.y===row);
  }
  
  // @ts-ignore
  function checkVisited(col, row) {
    return visited.some((cell) => cell.x===col && cell.y===row);
  }

 var f = findAll(theGrid, startX, startY);
</script>

<div class="grid">
  {#each rows as row}
  {#each cols as col}
  <div
				style="grid-row: {row + 1}; grid-column: {col + 1};"
        class="cell"
				class:water={checkMove(col,row)}
        class:start={startX===col && startY===row}
        class:visited={checkVisited(col,row)}
			>
				{theGrid[row][col]}
			</div>
		{/each}
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 20px);
		grid-template-rows: repeat(4, 20px);
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-auto-rows: 1fr;
	}

	.cell {
		border: 1px solid black;
		text-align: center;
		vertical-align: middle;
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
