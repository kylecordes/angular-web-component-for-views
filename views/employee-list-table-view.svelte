{#if list}
  <table class="bordered unselectable">
    {#each list as employee}
      <tr on:click="_emit('selectId', employee.id)"
        style="background-color: { employee.id == selectedId ? 'yellow' : ''}">
        <td>
          <span>{ employee.first_name }</span>
        </td>
        <td>
          <span>{ employee.last_name }</span>
        </td>
        <td>
          <span>{ employee.hours_worked }</span>
        </td>
      </tr>
    {/each}
  </table>
{/if}

<script>
  export default {
    tag: "employee-list-table-view",
    methods: {
      _emit(eventName, value) {
        this.dispatchEvent(new CustomEvent(eventName, {
          detail: value,
          bubbles: true,
          cancelable: true,
          composed: true // makes the event jump shadow DOM boundary
        }));
      }
    }
  };
</script>
