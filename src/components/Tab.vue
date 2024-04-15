<template>
  <FormKit type="form">
    <FormKit type="multi-step">
      <FormKit type="step" name="Step 1">
        <FormKit
          validation="required"
          type="radio"
          label="Radio Auswahl"
          help="Welches Radio nimmst du?"
          :options="[
            'Radio 1',
            'Radio 2',
            'Radio 3',
            'Radio 4',
            'Radio 5',
            'Radio 6',
          ]"
        />
      </FormKit>
      <FormKit type="step" name="Zeitauswahl">
        <FormKit
          type="datetime-local"
          value="2020-03-13T18:22"
          label="Termin:"
          help="Welchen Termin würden Sie wählen?"
          validation="required|date_after"
          validation-visibility="live"
        />
      </FormKit>

      <FormKit type="step" name="Anita Max Wynn">
        <FormKit
          type="text"
          label="Name"
          prefix-icon="avatarMan"
          validation="required"
        />
        <FormKit
          type="email"
          label="Email"
          prefix-icon="email"
          validation="required|email"
        />
        <FormKit
          name="issue"
          type="textarea"
          label="Nachricht"
          help="Bitte geben Sie uns ihr Anliegen!"
          validation="required|length:10,500"
        />
      </FormKit>
    </FormKit>
  </FormKit>
</template>
