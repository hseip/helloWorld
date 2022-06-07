<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Bronx Academy of Software Engineering
        </q-toolbar-title>
        <router-link to="/top/5" class="text-white q-mx-md">Home</router-link>
        <router-link to="/chart" class="text-white q-mx-md">Chart</router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script></script>
<style></style>
