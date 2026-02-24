var ys=Object.defineProperty;var bs=(n,e,t)=>e in n?ys(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ue=(n,e,t)=>bs(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function z(){}function ws(n,e){for(const t in e)n[t]=e[t];return n}function Ni(n){return n()}function zn(){return Object.create(null)}function Ue(n){n.forEach(Ni)}function Ii(n){return typeof n=="function"}function mt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function vs(n){return Object.keys(n).length===0}function Oi(n,...e){if(n==null){for(const i of e)i(void 0);return z}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Gt(n){let e;return Oi(n,t=>e=t)(),e}function Ti(n,e,t){n.$$.on_destroy.push(Oi(e,t))}function ks(n,e,t,i){if(n){const s=Ai(n,e,t,i);return n[0](s)}}function Ai(n,e,t,i){return n[1]&&i?ws(t.ctx.slice(),n[1](i(e))):t.ctx}function Ss(n,e,t,i){return n[2],e.dirty}function Es(n,e,t,i,s,o){if(s){const r=Ai(e,t,i,o);n.p(r,s)}}function Ns(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function p(n,e){n.appendChild(e)}function J(n,e,t){n.insertBefore(e,t||null)}function Y(n){n.parentNode&&n.parentNode.removeChild(n)}function Ct(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function N(n){return document.createElement(n)}function L(n){return document.createTextNode(n)}function B(){return L(" ")}function Li(){return L("")}function Ee(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function F(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Is(n){return Array.from(n.childNodes)}function H(n,e){e=""+e,n.data!==e&&(n.data=e)}let Ot;function Et(n){Ot=n}function Ci(){if(!Ot)throw new Error("Function called outside component initialization");return Ot}function $i(n){Ci().$$.on_mount.push(n)}function Os(n){Ci().$$.on_destroy.push(n)}const tt=[],Wt=[];let ot=[];const Wn=[],Ts=Promise.resolve();let wn=!1;function As(){wn||(wn=!0,Ts.then(Di))}function vn(n){ot.push(n)}const hn=new Set;let Qe=0;function Di(){if(Qe!==0)return;const n=Ot;do{try{for(;Qe<tt.length;){const e=tt[Qe];Qe++,Et(e),Ls(e.$$)}}catch(e){throw tt.length=0,Qe=0,e}for(Et(null),tt.length=0,Qe=0;Wt.length;)Wt.pop()();for(let e=0;e<ot.length;e+=1){const t=ot[e];hn.has(t)||(hn.add(t),t())}ot.length=0}while(tt.length);for(;Wn.length;)Wn.pop()();wn=!1,hn.clear(),Et(n)}function Ls(n){if(n.fragment!==null){n.update(),Ue(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(vn)}}function Cs(n){const e=[],t=[];ot.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),ot=e}const Yt=new Set;let xe;function rt(){xe={r:0,c:[],p:xe}}function at(){xe.r||Ue(xe.c),xe=xe.p}function Z(n,e){n&&n.i&&(Yt.delete(n),n.i(e))}function oe(n,e,t,i){if(n&&n.o){if(Yt.has(n))return;Yt.add(n),xe.c.push(()=>{Yt.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function Ie(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function $s(n,e){oe(n,1,1,()=>{e.delete(n.key)})}function Ds(n,e,t,i,s,o,r,a,l,c,f,u){let h=n.length,m=o.length,_=h;const d={};for(;_--;)d[n[_].key]=_;const g=[],y=new Map,v=new Map,E=[];for(_=m;_--;){const w=u(s,o,_),b=t(w);let I=r.get(b);I?E.push(()=>I.p(w,e)):(I=c(b,w),I.c()),y.set(b,g[_]=I),b in d&&v.set(b,Math.abs(_-d[b]))}const S=new Set,T=new Set;function A(w){Z(w,1),w.m(a,f),r.set(w.key,w),f=w.first,m--}for(;h&&m;){const w=g[m-1],b=n[h-1],I=w.key,U=b.key;w===b?(f=w.first,h--,m--):y.has(U)?!r.has(I)||S.has(I)?A(w):T.has(U)?h--:v.get(I)>v.get(U)?(T.add(I),A(w)):(S.add(U),h--):(l(b,r),h--)}for(;h--;){const w=n[h];y.has(w.key)||l(w,r)}for(;m;)A(g[m-1]);return Ue(E),g}function Tt(n){n&&n.c()}function ut(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),vn(()=>{const o=n.$$.on_mount.map(Ni).filter(Ii);n.$$.on_destroy?n.$$.on_destroy.push(...o):Ue(o),n.$$.on_mount=[]}),s.forEach(vn)}function ft(n,e){const t=n.$$;t.fragment!==null&&(Cs(t.after_update),Ue(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function qs(n,e){n.$$.dirty[0]===-1&&(tt.push(n),As(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function $t(n,e,t,i,s,o,r=null,a=[-1]){const l=Ot;Et(n);const c=n.$$={fragment:null,ctx:[],props:o,update:z,not_equal:s,bound:zn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:zn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let f=!1;if(c.ctx=t?t(n,e.props||{},(u,h,...m)=>{const _=m.length?m[0]:h;return c.ctx&&s(c.ctx[u],c.ctx[u]=_)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](_),f&&qs(n,u)),h}):[],c.update(),f=!0,Ue(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=Is(e.target);c.fragment&&c.fragment.l(u),u.forEach(Y)}else c.fragment&&c.fragment.c();e.intro&&Z(n.$$.fragment),ut(n,e.target,e.anchor),Di()}Et(l)}class Dt{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){ft(this,1),this.$destroy=z}$on(e,t){if(!Ii(t))return z;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!vs(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ms="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ms);const Rs=`game:
  id: boiler_7
  title: Boiler 7
  version: "0.1"

  start:
    scene: arrival
    node: dock
  
  ui:
    theme: default
    text_speed: normal`,Ps=`items:
  inspector_badge:
    name: boiler.item.badge.name
    description: boiler.item.badge.description

  valve_key:
    name: boiler.item.valve_key.name
    description: boiler.item.valve_key.description

  maintenance_log:
    name: boiler.item.log.name
    description: boiler.item.log.description

  sealed_report:
    name: boiler.item.report.name
    description: boiler.item.report.description
`,Bs=`boiler:
  choice:
    enter_floor: "Enter the boiler floor"
    inspect_valve: "Inspect the auxiliary manifold"
    speak_worker: "Speak to the machinist"
    go_control: "Proceed to the control room"
    read_logs: "Review maintenance logs"
    descend: "Descend to the lower chamber"
    return: "Return to the boiler floor"
    back: "Go back"
    stabilize: "Attempt manual stabilization"
    investigate: "Inspect regulator housing"
    retreat: "Retreat to control room"
    proceed_end: "Complete inspection and file report"
    stabilize_after: "Stabilize the regulator"
    take_valve_key: "Take the valve key"
    listen_worker: "Press the machinist for details"
    submit_report: "Submit official report"

  item:
    badge:
      name: "Inspection Badge"
      description: "Test1"
    valve_key:
      name: "Valve Key"
      description: "Test2"
    log:
      name: "Maintenance Logbook"
      description: "Test3"
    report:
      name: "Sealed Report"
      description: "Test4"

  arrival:
    dock: >
      The river fog hangs low over Dock 17.
      Boiler 7's exhaust tower cuts through the mist like a blade.
      The district depends on this unit. If it fails, half the lower wards go dark.
      Your inspection orders are stamped urgent.

  floor:
    main: >
      The boiler floor trembles beneath rotating pistons and hissing valves.
      Workers move with deliberate efficiency, but conversations stop when you pass.
      Pressure gauges along the far wall flicker slightly above normal range.

    valve: >
      The auxiliary pressure manifold is partially disassembled.
      A heavy brass valve key rests on a maintenance hook.
      No one seems eager to claim responsibility.

    worker: >
      A soot-streaked machinist glances at your badge, then away.
      After a pause, they lean closer.
      "The readings started spiking three nights ago.
      Management says it's drift.
      It isn't drift."

    main_worker_warning: >
      The machinist's warning lingers in your thoughts.

  control:
    entry: >
      The control room overlooks the boiler core through reinforced glass.
      Brass levers line the console.
      The central pressure needle vibrates against its housing.

    logs: >
      The maintenance ledger shows repeated recalibrations filed and overwritten.
      Several entries are signed, then crossed out.
      Someone adjusted tolerance limits upward.

    entry_tampering_found: >
      The falsified calibration logs shift your perception of the room.

  lower:
    entrance: >
      The lower chamber radiates dry heat.
      Steam condenses along the iron ribs of the chamber walls.
      The primary regulator housing groans under strain.

    no_valve_key_hint: >
      Without the proper valve key, any manual adjustment would be reckless.

    no_tampering_hint: >
      Nothing here immediately suggests deliberate interference.
      It could still be mechanical fatigue.

    stabilize: >
      You slot the valve key into the regulator assembly.
      A controlled counterturn releases trapped pressure in measured bursts.
      The chamber's vibration eases, though the system remains fragile.

    tampering: >
      Behind the regulator casing, a calibration stop has been filed down.
      Not worn.
      Filed.
      The boiler was forced to tolerate higher pressure than design allowed.

    valve_ready: >
      With the valve key in hand, manual adjustment is possible.

    entrance_suspicion: >
      Knowing the regulator was altered changes the meaning of every vibration.

  conclusion:
    final: >
      Boiler 7 stabilizes under your intervention.
      The district lights will hold tonight.
      What follows depends on what you choose to report.

    neutral: >
      You file a technical summary.
      No accusations.
      No names.
      The Guild will review internally.

    worker_trust: >
      You attach documentation of the tampering.
      The machinists will know someone listened.
      The Guild will not appreciate the implication.

    isolated: >
      You restrict your report to mechanical anomalies.
      Quietly.
      Whatever this was, it will remain buried.

    end: >
      The report is sealed and filed.
      Boiler 7 will hold — for now.
      Whatever forces strained the regulator remain outside the scope of your duty.
      The district sleeps with its lights intact.
`,Fs=`rules:
  systems:
    randomness: false
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,Us=`scene:
  id: arrival
  nodes:

    - id: dock
      text:
        - key: boiler.arrival.dock
      choices:
        - id: enter_floor
          text: boiler.choice.enter_floor
          effects:
            - add_item:
                id: inspector_badge
          goto:
            scene: boiler_floor
            node: main`,Ks=`scene:
  id: boiler_floor
  nodes:

    - id: main
      text:
        - key: boiler.floor.main

        - if:
            eq:
              var: worker_warning
              value: true
          then:
            key: boiler.floor.main_worker_warning

      choices:
        - id: inspect_valve
          text: boiler.choice.inspect_valve
          goto:
            scene: boiler_floor
            node: valve

        - id: speak_worker
          text: boiler.choice.speak_worker
          goto:
            scene: boiler_floor
            node: worker

        - id: go_control
          text: boiler.choice.go_control
          goto:
            scene: control_room
            node: entry

    - id: valve
      text:
        - key: boiler.floor.valve
      choices:
        - id: take_valve_key
          text: boiler.choice.take_valve_key
          if:
            eq:
              var: has_valve_key
              value: false
          effects:
            - add_item:
                id: valve_key
            - set:
                var: has_valve_key
                value: true
          goto:
            scene: boiler_floor
            node: main

        - id: back_main
          text: boiler.choice.back
          goto:
            scene: boiler_floor
            node: main

    - id: worker
      text:
        - key: boiler.floor.worker
      choices:
        - id: listen_worker
          text: boiler.choice.listen_worker
          if:
            eq:
              var: worker_warning
              value: false
          effects:
            - set:
                var: worker_warning
                value: true
            - add:
                var: trust_level
                value: 1
          goto:
            scene: boiler_floor
            node: main

        - id: back_main
          text: boiler.choice.back
          goto:
            scene: boiler_floor
            node: main`,js=`scene:
  id: conclusion
  nodes:

    - id: final
      text:
        - key: boiler.conclusion.final

        - if:
            eq:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.neutral

        - if:
            gt:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.worker_trust

        - if:
            lt:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.isolated

      choices:
        - id: submit_report
          text: boiler.choice.submit_report
          if:
            eq:
              var: report_submitted
              value: false
          effects:
            - add_item:
                id: sealed_report
            - set:
                var: report_submitted
                value: true
          goto:
            scene: conclusion
            node: end

    - id: end
      text:
        - key: boiler.conclusion.end
      choices: []`,Vs=`scene:
  id: control_room
  nodes:

    - id: entry
      text:
        - key: boiler.control.entry

        - if:
            eq:
              var: discovered_tampering
              value: true
          then:
            key: boiler.control.entry_tampering_found

      choices:
        - id: read_logs
          text: boiler.choice.read_logs
          if:
            eq:
              var: discovered_tampering
              value: false
          effects:
            - add_item:
                id: maintenance_log
            - set:
                var: discovered_tampering
                value: true
          goto:
            scene: control_room
            node: entry

        - id: descend
          text: boiler.choice.descend
          goto:
            scene: lower_chamber
            node: entrance

        - id: return_floor
          text: boiler.choice.return
          goto:
            scene: boiler_floor
            node: main`,xs=`scene:
  id: lower_chamber
  nodes:

    - id: entrance
      text:
        - key: boiler.lower.entrance

        - if:
            eq:
              var: has_valve_key
              value: false
          then:
            key: boiler.lower.no_valve_key_hint

        - if:
            eq:
              var: has_valve_key
              value: true
          then:
            key: boiler.lower.valve_ready

        - if:
            eq:
              var: discovered_tampering
              value: false
          then:
            key: boiler.lower.no_tampering_hint

        - if:
            eq:
              var: discovered_tampering
              value: true
          then:
            key: boiler.lower.entrance_suspicion

      choices:
        - id: investigate
          text: boiler.choice.investigate
          if:
            all:
              - eq:
                  var: discovered_tampering
                  value: true
              - eq:
                  var: investigated_regulator
                  value: false
          effects:
            - set:
                var: investigated_regulator
                value: true
            - add:
                var: trust_level
                value: -1
          goto:
            scene: lower_chamber
            node: tampering_result

        - id: stabilize
          text: boiler.choice.stabilize
          if:
            eq:
              var: has_valve_key
              value: true
          effects:
            - add:
                var: pressure_level
                value: -1
          goto:
            scene: conclusion
            node: final

        - id: retreat
          text: boiler.choice.retreat
          goto:
            scene: control_room
            node: entry

    - id: tampering_result
      text:
        - key: boiler.lower.tampering
      choices:
        - id: back_entrance
          text: boiler.choice.back
          goto:
            scene: lower_chamber
            node: entrance`,Gs=`state:
  variables:

    has_valve_key:
      type: boolean
      initial: false
      visible: true

    worker_warning:
      type: boolean
      initial: false
      visible: true

    discovered_tampering:
      type: boolean
      initial: false
      visible: true

    investigated_regulator:
      type: boolean
      initial: false
      visible: true

    report_submitted:
      type: boolean
      initial: false
      visible: true

    trust_level:
      type: number
      initial: 0
      visible: true

    pressure_level:
      type: number
      initial: 3
      visible: true`,Ys=`game:
  id: midnight_switchboard
  title: Midnight Switchboard
  version: "0.1"

  start:
    scene: prologue
    node: desk

  ui:
    theme: default
    text_speed: normal`,Hs=`items:

  brass_token:
    name: midnight.item.brass_token.name
    description: midnight.item.brass_token.description

  operator_badge:
    name: midnight.item.operator_badge.name
    description: midnight.item.operator_badge.description

  torn_photograph:
    name: midnight.item.torn_photograph.name
    description: midnight.item.torn_photograph.description

  ritual_diagram:
    name: midnight.item.ritual_diagram.name
    description: midnight.item.ritual_diagram.description

  basement_key:
    name: midnight.item.basement_key.name
    description: midnight.item.basement_key.description

  black_candle:
    name: midnight.item.black_candle.name
    description: midnight.item.black_candle.description`,Js=`midnight:

  prologue:
    desk_intro: "The switchboard office is dimly lit. Only one desk lamp burns."
    call_active: "You lift the receiver. Static crackles across the line, interruped only by the sound of slow, deliberate breathing."
    call_rings_again: "The telephone continues ringing. It refuses to be ignored."
    clock: "The clock reads 00:17."
    anxiety_status: "Your anxiety level is {{anxiety}}."
    line_open: "The line is already open. Someone is breathing softly."

    lift_receiver: "Your fingers hover over the receiver."
    receiver_warm: "It already feels faintly warm."
    ringing_stops: "The ringing stops the instant you lift it."

    breathing_stops: "The breathing stops."
    feel_watched: "You feel watched."
    memory_echo: "For a moment, you remember answering this call before."

    trace_attempt: "You attempt to trace the origin."
    board_flicker: "The switchboard lights flicker."
    signal_internal: "The signal appears to originate from somewhere inside this building."

    ringing_louder: "The ringing is louder now."
    anxiety_display: "Anxiety: {{anxiety}}"
    ringing_drill: "The sound drills into your skull."

  switchboard:
    main_intro: "The switchboard stretches across the wall. Wires hang like veins."
    desk: "The desk is cluttered with invoices and old cigarette ash."
    panel: "The control panel hums faintly beneath your fingertips."
    cabinet: "A narrow filing cabinet stands half open."

    status_line: "Anxiety: {{anxiety}} | Corruption: {{corruption}}"
    light_flicker: "The overhead light flickers intermittently."
    cable_sway: "One of the unplugged cables sways gently. There is no draft."
    board_familiar: "The board feels almost familiar beneath your hands."

    listen_still: "You stand perfectly still."
    listen_normal: "Only the faint hum of electricity answers you."
    listen_other: "Something else hums beneath it. Slow. Patient."

    token_visible: "A small brass token lies near the blotter."

    drawer_open: "The drawer resists before sliding open."
    badge_present: "An old operator badge rests inside."
    badge_indent: "The empty indentation suggests it belonged there for years."

    faded_initial: "One switch is labeled only with a faded initial: M."
    badge_match: "The insignia on the badge matches a scratched symbol near the lower switches."

    photo_visible: "A torn photograph is tucked inside a folder."
    photo_shift: "The photograph seems slightly different each time you glance at it."

  records:
    archive_intro: "Rows of old folders line the archive room."
    files: "Most files are mundane. A few are sealed with red wax."
    diagram_reaction: "The diagram seems older than the paper it rests on."

    dust_air: "Dust hangs in the air like suspended breath."
    drawers_ajar: "The filing drawers seem slightly ajar, though you do not remember opening them."

    diagram_visible: "Among the folders is a brittle sheet covered in geometric inkwork."

    corruption_display: "Corruption: {{corruption}}"
    whisper_floor: "You briefly hear whispering beneath the floorboards."

  basement:
    stairs_intro: "The staircase descends into darkness."
    chamber_intro: "The basement chamber smells of wax and stone."
    ritual_ready: "You kneel at the center of the circle."
    ritual_complete: "The candle burns unnaturally steady."

    status_line: "Anxiety: {{anxiety}} | Corruption: {{corruption}}"
    hands_tremble: "Your hands tremble as you grip the railing."
    shift_below: "Something shifts below. Not footsteps. Something heavier."

    chamber_description: "The chamber is circular. Symbols are carved into the stone."
    corruption_display: "Corruption: {{corruption}}"
    symbols_pulse: "The symbols faintly pulse."

    pattern_memory: "You replicate the pattern from memory."

    corruption_surge: "Corruption surges to {{corruption}}."
    air_tears: "The air tears open."

  operator:
    line_active: "The operator's voice emerges through static."
    trust_shift: "There is recognition in the silence."
    tension: "The conversation tightens like a wire pulled too far."
    revelation: "The truth filters through distortion."

    status_line: "Anxiety: {{anxiety}} | Trust: {{operator_trust}} | Corruption: {{corruption}}"
    layered_voice: "The voice sounds layered, as if two people speak in unison."

    voice_softens: "The voice softens. \\"You finally remember.\\""

    receiver_hot: "The receiver feels hot against your ear."

    truth_inhuman: "The truth is no longer human."

  ending:
    ritual_outcome: "The ritual concludes."
    reconciliation: "The voice thanks you. The line goes silent."
    collapse: "The connection overloads. Reality flickers."
    revelation: "The truth settles heavily in the air."
    sealed: "The chamber grows quiet. The veil remains intact."
    consumed: "Darkness folds inward. The line never disconnects."
    closed: "The office is empty. Morning light filters in."
    open: "The switchboard hums. Something remains connected."

    corruption_level: "Corruption level: {{corruption}}"
    veil_split: "The veil splits completely."
    never_alone: "You were never alone in the room."

  choice:
    answer_call: "Answer the ringing phone"
    answer_after_delay: "Finally answer the ringing phone"
    ignore_call: "Ignore the ringing"
    leave_desk: "Leave the desk"

    speak: "Speak into the receiver"
    hang_up: "Hang up"

    trace_call: "Attempt to trace the call"
    listen_room: "Stand still and listen"
    open_drawer: "Open the desk drawer"
    take_badge: "Take the operator badge"

    inspect_desk: "Inspect the desk"
    inspect_panel: "Examine the control panel"
    inspect_cabinet: "Open the filing cabinet"
    go_records: "Enter the records room"
    open_operator_line: "Open a direct operator line"
    descend_basement: "Descend to the basement"
    back: "Return"

    take_token: "Take the brass token"
    study_label: "Study the faded label"
    take_photo: "Take the torn photograph"
    search_deeper: "Search deeper inside"

    search_files: "Search through the files"
    return_switchboard: "Return to the switchboard"
    take_diagram: "Take the ritual diagram"
    disturb_stack: "Disturb the stack of folders"
    steady_self: "Steady yourself"

    descend_fully: "Descend fully"
    hesitate: "Hesitate on the stairs"
    retreat: "Retreat upstairs"

    prepare_ritual: "Prepare the ritual"
    search_room: "Search the chamber"
    ignite_candle: "Ignite the black candle"
    abort_ritual: "Abort the ritual"
    face_consequence: "Face the consequence"

    speak_name: "Speak the operator's name"
    accuse: "Accuse the voice"
    listen_silently: "Listen silently"
    accept_truth: "Accept the truth"
    doubt_again: "Express doubt"
    escalate: "Escalate the confrontation"
    withdraw: "Withdraw from the line"
    pursue_truth: "Pursue the truth"
    disconnect: "Disconnect the line"

    continue: "Continue"
    finish: "Finish"

  item:
    brass_token:
      name: "Brass Token"
      description: "A heavy brass token engraved with an unfamiliar symbol."

    operator_badge:
      name: "Operator Badge"
      description: "A tarnished badge bearing the switchboard insignia."

    torn_photograph:
      name: "Torn Photograph"
      description: "A half-burned photograph of two figures near the switchboard."

    ritual_diagram:
      name: "Ritual Diagram"
      description: "A geometric pattern drawn in fading ink."

    basement_key:
      name: "Basement Key"
      description: "A cold iron key labeled only with a scratched B."

    black_candle:
      name: "Black Candle"
      description: "A thick candle that absorbs more light than it reflects."`,zs=`rules:
  systems:
    randomness: true
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,Ws=`scene:
  id: basement_chamber

  nodes:

    - id: chamber
      text:
        - key: midnight.basement.chamber_intro
        - key: midnight.basement.chamber_description
        - key: midnight.basement.corruption_display
        - if:
            gt:
              var: corruption
              value: 2
          then:
            key: midnight.basement.symbols_pulse
      choices:

        - id: prepare_ritual
          text: midnight.choice.prepare_ritual
          if:
            all:
              - has_item:
                  id: ritual_diagram
              - has_item:
                  id: black_candle
          goto:
            scene: basement_chamber
            node: ritual_ready

        - id: search_room
          text: midnight.choice.search_room
          if:
            not:
              has_item:
                id: black_candle
          effects:
            - add_item:
                id: black_candle
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_chamber
            node: chamber

        - id: retreat
          text: midnight.choice.retreat
          goto:
            scene: basement_stairs
            node: stairs


    - id: ritual_ready
      text:
        - key: midnight.basement.ritual_ready
        - if:
            eq:
              var: ritual_unlocked
              value: true
          then:
            key: midnight.basement.pattern_memory
      choices:

        - id: ignite_candle
          text: midnight.choice.ignite_candle
          effects:
            - add:
                var: corruption
                value: 2
          goto:
            scene: basement_chamber
            node: ritual_complete

        - id: abort_ritual
          text: midnight.choice.abort_ritual
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_chamber
            node: chamber


    - id: ritual_complete
      text:
        - key: midnight.basement.ritual_complete
        - key: midnight.basement.corruption_surge
        - if:
            gte:
              var: corruption
              value: 4
          then:
            key: midnight.basement.air_tears
      choices:

        - id: face_consequence
          text: midnight.choice.face_consequence
          goto:
            scene: ending
            node: ritual_outcome`,Qs=`scene:
  id: basement_stairs

  nodes:

    - id: stairs
      text:
        - key: midnight.basement.stairs_intro
        - key: midnight.basement.status_line
        - if:
            gt:
              var: anxiety
              value: 2
          then:
            key: midnight.basement.hands_tremble
        - if:
            gt:
              var: corruption
              value: 1
          then:
            key: midnight.basement.shift_below
      effects:
        - set:
            var: in_switchboard_room
            value: false
        - set:
            var: in_basement
            value: true
      choices:

        - id: descend_fully
          text: midnight.choice.descend_fully
          goto:
            scene: basement_chamber
            node: chamber

        - id: hesitate
          text: midnight.choice.hesitate
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_stairs
            node: stairs

        - id: retreat_upstairs
          text: midnight.choice.retreat
          effects:
            - set:
                var: in_switchboard_room
                value: true
            - set:
                var: in_basement
                value: false
          goto:
            scene: switchboard_room
            node: main`,Xs=`scene:
  id: ending

  nodes:

    - id: ritual_outcome
      text:
        - key: midnight.ending.ritual_outcome
        - key: midnight.ending.corruption_level
        - if:
            gte:
              var: corruption
              value: 4
          then:
            key: midnight.ending.veil_split
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:

        - id: ritual_good
          text: midnight.choice.continue
          if:
            lt:
              var: corruption
              value: 4
          goto:
            scene: ending
            node: sealed

        - id: ritual_bad
          text: midnight.choice.continue
          if:
            gte:
              var: corruption
              value: 4
          goto:
            scene: ending
            node: consumed


    - id: reconciliation
      text:
        - key: midnight.ending.reconciliation
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_reconciliation
          text: midnight.choice.finish
          goto:
            scene: ending
            node: closed


    - id: collapse
      text:
        - key: midnight.ending.collapse
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_collapse
          text: midnight.choice.finish
          goto:
            scene: ending
            node: consumed


    - id: revelation_outcome
      text:
        - key: midnight.ending.revelation
        - if:
            gt:
              var: corruption
              value: 3
          then:
            key: midnight.ending.never_alone
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_revelation
          text: midnight.choice.finish
          goto:
            scene: ending
            node: open


    - id: sealed
      text:
        - key: midnight.ending.sealed
      choices: []

    - id: consumed
      text:
        - key: midnight.ending.consumed
      choices: []

    - id: closed
      text:
        - key: midnight.ending.closed
      choices: []

    - id: open
      text:
        - key: midnight.ending.open
      choices: []`,Zs=`scene:
  id: operator_line

  nodes:

    - id: line_active
      text:
        - key: midnight.operator.line_active
        - key: midnight.operator.status_line
        - if:
            gt:
              var: corruption
              value: 2
          then:
            key: midnight.operator.layered_voice
      choices:

        - id: speak_name
          text: midnight.choice.speak_name
          if:
            eq:
              var: knows_operator_name
              value: true
          effects:
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: operator_line
            node: trust_shift

        - id: accuse
          text: midnight.choice.accuse
          effects:
            - add:
                var: anxiety
                value: 1
            - add:
                var: operator_trust
                value: -1
          goto:
            scene: operator_line
            node: tension

        - id: listen_silently
          text: midnight.choice.listen_silently
          effects:
            - add:
                var: corruption
                value:
                  random: "1/2"
          goto:
            scene: operator_line
            node: revelation

        - id: hang_up_line
          text: midnight.choice.hang_up
          goto:
            scene: switchboard_room
            node: main


    - id: trust_shift
      text:
        - key: midnight.operator.trust_shift
        - if:
            gte:
              var: operator_trust
              value: 2
          then:
            key: midnight.operator.voice_softens
      choices:

        - id: accept_truth
          text: midnight.choice.accept_truth
          if:
            gte:
              var: operator_trust
              value: 2
          goto:
            scene: ending
            node: reconciliation

        - id: doubt_again
          text: midnight.choice.doubt_again
          goto:
            scene: operator_line
            node: tension


    - id: tension
      text:
        - key: midnight.operator.tension
        - if:
            gt:
              var: anxiety
              value: 3
          then:
            key: midnight.operator.receiver_hot
      choices:

        - id: escalate
          text: midnight.choice.escalate
          effects:
            - add:
                var: corruption
                value: 1
          goto:
            scene: ending
            node: collapse

        - id: withdraw
          text: midnight.choice.withdraw
          goto:
            scene: switchboard_room
            node: main


    - id: revelation
      text:
        - key: midnight.operator.revelation
        - if:
            gt:
              var: corruption
              value: 3
          then:
            key: midnight.operator.truth_inhuman
      choices:

        - id: pursue_truth
          text: midnight.choice.pursue_truth
          goto:
            scene: ending
            node: revelation_outcome

        - id: disconnect
          text: midnight.choice.disconnect
          goto:
            scene: switchboard_room
            node: main`,eo=`scene:
  id: prologue

  nodes:

    - id: desk
      text:
        - key: midnight.prologue.desk_intro
        - key: midnight.prologue.clock
        - key: midnight.prologue.anxiety_status
        - if:
            eq:
              var: call_answered
              value: true
          then:
            key: midnight.prologue.line_open
      choices:
        - id: answer_call
          text: midnight.choice.answer_call
          if:
            eq:
              var: call_answered
              value: false
          effects:
            - set:
                var: call_answered
                value: true
            - add:
                var: anxiety
                value:
                  random: "1/2"
          goto:
            scene: prologue
            node: lift_receiver

        - id: ignore_call
          text: midnight.choice.ignore_call
          if:
            eq:
              var: call_answered
              value: false
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: prologue
            node: call_rings_again

        - id: proceed_room
          text: midnight.choice.leave_desk
          if:
            eq:
              var: call_answered
              value: true
          goto:
            scene: switchboard_room
            node: main


    - id: lift_receiver
      text:
        - key: midnight.prologue.lift_receiver
        - if:
            gte:
              var: anxiety
              value: 1
          then:
            key: midnight.prologue.receiver_warm
        - key: midnight.prologue.ringing_stops
      choices:
        - id: continue_answer
          text: midnight.choice.answer_call
          goto:
            scene: prologue
            node: call_active


    - id: call_active
      text:
        - key: midnight.prologue.call_active
        - key: midnight.prologue.breathing_stops
        - if:
            gte:
              var: anxiety
              value: 1
          then:
            key: midnight.prologue.feel_watched
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.prologue.memory_echo
      choices:
        - id: speak
          text: midnight.choice.speak
          effects:
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: main

        - id: hang_up
          text: midnight.choice.hang_up
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: switchboard_room
            node: main

        - id: trace_call
          text: midnight.choice.trace_call
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: prologue
            node: static_response


    - id: static_response
      text:
        - key: midnight.prologue.trace_attempt
        - key: midnight.prologue.board_flicker
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.prologue.signal_internal
      choices:
        - id: abandon_trace
          text: midnight.choice.back
          goto:
            scene: prologue
            node: call_active


    - id: call_rings_again
      text:
        - key: midnight.prologue.call_rings_again
        - key: midnight.prologue.ringing_louder
        - key: midnight.prologue.anxiety_display
        - if:
            gte:
              var: anxiety
              value: 2
          then:
            key: midnight.prologue.ringing_drill
      choices:
        - id: answer_after_delay
          text: midnight.choice.answer_after_delay
          effects:
            - set:
                var: call_answered
                value: true
            - add:
                var: corruption
                value: 1
          goto:
            scene: prologue
            node: lift_receiver`,to=`scene:
  id: records_room

  nodes:

    - id: archive
      text:
        - key: midnight.records.archive_intro
        - key: midnight.records.dust_air
        - if:
            gt:
              var: corruption
              value: 1
          then:
            key: midnight.records.drawers_ajar
      choices:

        - id: search_files
          text: midnight.choice.search_files
          goto:
            scene: records_room
            node: files

        - id: return_switchboard
          text: midnight.choice.return_switchboard
          goto:
            scene: switchboard_room
            node: main


    - id: files
      text:
        - key: midnight.records.files
        - if:
            not:
              has_item:
                id: ritual_diagram
          then:
            key: midnight.records.diagram_visible
      choices:

        - id: take_diagram
          text: midnight.choice.take_diagram
          if:
            not:
              has_item:
                id: ritual_diagram
          effects:
            - add_item:
                id: ritual_diagram
            - set:
                var: ritual_unlocked
                value: true
            - add:
                var: corruption
                value: 1
          goto:
            scene: records_room
            node: diagram_reaction

        - id: disturb_stack
          text: midnight.choice.disturb_stack
          effects:
            - add:
                var: anxiety
                value:
                  random: "1/2"
          goto:
            scene: records_room
            node: archive

        - id: back_archive
          text: midnight.choice.back
          goto:
            scene: records_room
            node: archive


    - id: diagram_reaction
      text:
        - key: midnight.records.diagram_reaction
        - key: midnight.records.corruption_display
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.records.whisper_floor
      choices:

        - id: steady_self
          text: midnight.choice.steady_self
          effects:
            - add:
                var: anxiety
                value: -1
          goto:
            scene: records_room
            node: archive

        - id: return_with_diagram
          text: midnight.choice.return_switchboard
          goto:
            scene: switchboard_room
            node: main`,no=`scene:
  id: switchboard_room

  nodes:

    - id: main
      text:
        - key: midnight.switchboard.main_intro
        - key: midnight.switchboard.status_line
        - if:
            gt:
              var: anxiety
              value: 2
          then:
            key: midnight.switchboard.light_flicker
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.cable_sway
        - if:
            gte:
              var: operator_trust
              value: 2
          then:
            key: midnight.switchboard.board_familiar
      choices:
        - id: inspect_desk
          text: midnight.choice.inspect_desk
          goto:
            scene: switchboard_room
            node: desk

        - id: inspect_panel
          text: midnight.choice.inspect_panel
          goto:
            scene: switchboard_room
            node: panel

        - id: inspect_cabinet
          text: midnight.choice.inspect_cabinet
          goto:
            scene: switchboard_room
            node: cabinet

        - id: listen_room
          text: midnight.choice.listen_room
          goto:
            scene: switchboard_room
            node: ambience

        - id: go_records
          text: midnight.choice.go_records
          goto:
            scene: records_room
            node: archive

        - id: go_operator_line
          text: midnight.choice.open_operator_line
          if:
            gt:
              var: operator_trust
              value: 0
          goto:
            scene: operator_line
            node: line_active

        - id: go_basement
          text: midnight.choice.descend_basement
          if:
            has_item:
              id: basement_key
          goto:
            scene: basement_stairs
            node: stairs


    - id: ambience
      text:
        - key: midnight.switchboard.listen_still
        - if:
            lt:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.listen_normal
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.listen_other
      choices:
        - id: return_from_listen
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: desk
      text:
        - key: midnight.switchboard.desk
        - if:
            not:
              has_item:
                id: brass_token
          then:
            key: midnight.switchboard.token_visible
      choices:
        - id: take_token
          text: midnight.choice.take_token
          if:
            not:
              has_item:
                id: brass_token
          effects:
            - add_item:
                id: brass_token
          goto:
            scene: switchboard_room
            node: desk

        - id: open_drawer
          text: midnight.choice.open_drawer
          goto:
            scene: switchboard_room
            node: drawer

        - id: back_main
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: drawer
      text:
        - key: midnight.switchboard.drawer_open
        - if:
            not:
              has_item:
                id: operator_badge
          then:
            key: midnight.switchboard.badge_present
        - if:
            has_item:
              id: operator_badge
          then:
            key: midnight.switchboard.badge_indent
      choices:
        - id: take_badge
          text: midnight.choice.take_badge
          if:
            not:
              has_item:
                id: operator_badge
          effects:
            - add_item:
                id: operator_badge
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: drawer

        - id: close_drawer
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: desk


    - id: panel
      text:
        - key: midnight.switchboard.panel
        - if:
            eq:
              var: knows_operator_name
              value: false
          then:
            key: midnight.switchboard.faded_initial
        - if:
            has_item:
              id: operator_badge
          then:
            key: midnight.switchboard.badge_match
      choices:
        - id: study_label
          text: midnight.choice.study_label
          if:
            eq:
              var: knows_operator_name
              value: false
          effects:
            - set:
                var: knows_operator_name
                value: true
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: panel

        - id: back_main_panel
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: cabinet
      text:
        - key: midnight.switchboard.cabinet
        - if:
            not:
              has_item:
                id: torn_photograph
          then:
            key: midnight.switchboard.photo_visible
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.switchboard.photo_shift
      choices:
        - id: take_photo
          text: midnight.choice.take_photo
          if:
            not:
              has_item:
                id: torn_photograph
          effects:
            - add_item:
                id: torn_photograph
            - add:
                var: anxiety
                value: 1
          goto:
            scene: switchboard_room
            node: cabinet

        - id: find_key
          text: midnight.choice.search_deeper
          if:
            all:
              - has_item:
                  id: torn_photograph
              - not:
                  has_item:
                    id: basement_key
          effects:
            - add_item:
                id: basement_key
          goto:
            scene: switchboard_room
            node: cabinet

        - id: back_main_cabinet
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main`,io=`state:
  variables:

    # Narrative progression flags
    call_answered:
      type: boolean
      initial: false
      visible: true

    knows_operator_name:
      type: boolean
      initial: false
      visible: true

    ritual_unlocked:
      type: boolean
      initial: false
      visible: true

    ending_triggered:
      type: boolean
      initial: false
      visible: false

    # Psychological pressure system
    anxiety:
      type: number
      initial: 0
      visible: true

    # Corruption escalation counter
    corruption:
      type: number
      initial: 0
      visible: true

    # Trust variable affecting dialogue paths
    operator_trust:
      type: number
      initial: 0
      visible: true

    # Location awareness
    in_switchboard_room:
      type: boolean
      initial: true
      visible: true

    in_basement:
      type: boolean
      initial: false
      visible: true`,so=`game:
  id: steelclad_skies
  title: Steelclad Skies
  version: "0.1"

  start:
    scene: prologue_awake
    node: awake

  ui:
    theme: default
    text_speed: rapid`,oo=`items:

  ### PROLOGUE SCENE 1 | AWAKE - BEDROOM ###
  gas_mask:
    name: prologue.item.gas_mask.name
    description: prologue.item.gas_mask.description

  taskbook:
    name: prologue.item.taskbook.name
    description: prologue.item.taskbook.description
  
  ### PROLOGUE SCENE 2.1 | MUNITIONS STORAGE ###
  service_rifle:
    name: prologue.item.service_rifle.name
    description: prologue.item.service_rifle.description

  service_rifle_ammunition:
    name: prologue.item.service_rifle_ammunition.name
    description: prologue.item.service_rifle_ammunition.description

  service_bayonet:
    name: prologue.item.service_bayonet.name
    description: prologue.item.service_bayonet.description`,ro=`prologue:

  ### PROLOGUE SCENE 1 | AWAKE - BEDROOM ###
  awake:
    intro: >
      The hums of the giant engines roar across the cabin room. Somethings afoot.
      The humming is different today–quieter and less distinct.
      You awake and check your notice-board for updates.

    notice_board: >
      General Notice — Between 0100 and 1300 the following events will occur today:
      Engine #5 maintenance —
      Junction Station #3 maintenance —
      Propellers #15 – #20 maintenance —
      Remain Vigilant. Remain Ready. The Ministry Appreciates You.

    make_ready: >
      That explains the difference of sound. You get ready for the day,
      cleaning yourself with wet cloths and your precious allocation of clean water.
      You use it sparingly, it's all you'll have for the week.
      If you do well enough today you might be able to afford soap at
      the provisions exchange today. You hang the cloths to dry and put on your
      work clothes for the day

    look_around: >
      It's your room, though claiming it's yours isn't quite right.
      Rusted steel walls and flooring provide that industrial smell
      you're so familiar with.
      The only objects of interest are your standard-issue gas mask and taskbook.
      There are no windows–you had your access to them revoked last month due to poor behaviour.
      The hanging cloths from today and yesterday stink up the room,
      though the exhaust vent helps a bit.

    take_stuff: >
      You take your gas mask–hopefully today you won't need it.
      You take your taskbook.

  ### PROLOGUE SCENE 2 | CORRIDOR ###
  corridor:
    intro: >
      You crank the wheel on your large water-tight steel door.
      It's strange how an airship like this would be designed to use these bulky,
      water-tight doors. You never bothered to question it though, you never had the time.
      The door creaks open slowly as you pull it inwards to reveal the dimly-lit corridor.
      Opposite to you is the room of another of your cabin mates, and the corridor is
      littered with doors similar to your own.

    see_signs: >
      Slightly to your right, hanging from the ceiling, is a series of crude and barely
      legible signs. The text on them you're all too familiar with.

    read_signs: >
      The signs read:
    
    sign_1: >
      ◀ MUNITIONS STORAGE BULKHEAD ◀

    sign_2: >
      ▲ OFFICERS QUARTERS | EXIT ▲

    sign_3: >
      ▶ CANTEEN | MEDICAL BAY ▶

    munition_prompt: >
      Looking at your taskbook, you can see that you're still missing your service
      rifle and alotted ammunition for the day. You should head to the armory in the
      bulkead munitions storage and see the quartermaster for your weapon.

    first_aid_prompt: >
      Now that you have your weapon, the last equipment you'll need today is your personal
      first-aid kit. The one you have on you is several years old and is likely useless
      or expired, particularly the chemicals. It'd be wise to go see the field medics about
      renewing or replacing your kit. However, there's no harm in arriving to work early.
      You haven't had to use your weapon or first-aid kit since you enlisted.
  
  ### PROLOGUE SCENE 2.1 | MUNITIONS STORAGE ###
  munitions:
    intro: >
      You walk into the dimly lit bulkhead storage room. In front of your are
      countless numbers of crates and racks containing munitions for the weapons
      of the ships. To your left you see a small sectioned-off room which bears a
      crudely written and maintained sign labelled "Crewman Armory". Boxes are strewn
      about haphazardly and with little thought in organization.

    inspect_crates: >
      The big wooden crates are stamped with the seal of the ministry, along with some
      text underneath indicating what they contain. The large, wide and narrow boxes
      contain cannon shells, and the more box-shaped crates seem to contain small arms
      ammunition and other paraphernalia. Nothing you wouldn't expect outside of munitions
      storage, bar the sole exception of a row of black crates not labelled and locked with
      padlocks and guarded by two unamused looking guards. At least, you think they're
      unamused. You can't tell since their steel masks and black-and-gold uniforms hide
      any semblance of humanity.

    inspect_crates_again: >
      You get a closer look at the crates and see some labels that catch your attention.
      "Shot, A.P.D.S., 17-pr., Mk II", "Shell, H.E., 6-pr., Mk IV, Fuze 130".
      You have no idea what any of those mean. And even if you did, it wouldn't matter
      since you're not part of the artillery corps. Before you could find any more riveting
      crates to inspect, the quartermaster warns you not to go any further in case the
      ministry's sentries catch wind of you beyond your allowed access.

    speak_to_quartermaster: >
      You head over to the armory and speak to the quartermaster.

    quartermaster_dialogue_1: >
      "There you are. Your rifle's in its usual place, third rack, fourth from the bottom.
      Here's your ammo. I wouldn't go hunting if I were you *chuckle*. Oh and your bayonet's
      already attached to the rifle. I know how much you love taking that thing off."

    quartermaster_dialogue_2a: >
      "No worries mate. I made sure to polish that barrel band you was whinging about yesterday.
      Let me know if you see anything else that needs fixing, though maintaining it is really
      your responsibility."

    quartermaster_dialogue_2b: >
      "Late? Mate you are the only bastard here dumb enough to wake up early. If it weren't
      for you I'd still be asleep. Kidding of course, the Lieutenant would kill me."
    
    goodbye_qm_a: >
      You wave goodbye to J."

    goodbye_qm_b: >
      You wave goodbye to J, followed by a cursory exchange of insults, slowly morphing your
      wave into a middle finger. "Wanker."

  ### PROLOGUE SCENE 2.2 | CANTEEN / MEDICAL BAY ###

  canteen:
    intro: >
      

  medical_bay:
  

  choice:

    ### PROLOGUE SCENE 1 | AWAKE - BEDROOM ###
    look_around: "Look around"
    take_stuff: "Take your stuff"

    ### PROLOGUE SCENE 2 | CORRIDOR ###
    head_out: "Head out"
    read_signs: "Read the signs"
    head_left: "Head left"
    head_right: "Head right"
    head_forwards: "Head forwards"

    ### PROLOGUE SCENE 2.1 | MUNITIONS STORAGE ###
    inspect_crates: "Inspect the crates"
    approach_armory: "Approach the armory"
    talk_to_qm_1a: "\\"Got it, cheers J.\\""
    talk_to_qm_1b: "\\"Sorry, am I late?\\""
    talk_to_qm_2: "\\"Thanks again J, I'll see you at mess later.\\""
    return_to_corridor: "Return to corridor"

  item:

    ### PROLOGUE SCENE 1 | AWAKE - BEDROOM ###
    gas_mask:
      name: "Gas Mask"
      description: "Standard issue from the ministry. It reeks of sulfur and sweat."

    taskbook:
      name: "Taskbook"
      description: "Notes and tasks scribbled from previous assignments on days past litter the book's pages."

    ### PROLOGUE SCENE 2.1 | MUNITIONS STORAGE ###
    service_rifle:
      name: "Service Rifle"
      description: >
        Your trusty .303 service rifle. God knows when or where it came from. The wood's been
        polished to a shine, but you can see the visible markings of age and rot beneath the
        surface finish.

    service_rifle_ammunition:
      name: "Service Rifle Ammunition"
      description: >
        Loose rounds in a sheath of wax-paper. The brass is worn and has seen better days.
        You've only got so many rounds. It's been decades since the last war, or so the ministry
        says. These won't win you a war, or even a battle, but it's better than nothing.

    service_bayonet:
      name: "Service Bayonet"
      description: >
        In surprisingly good condition, considering the age of everything else. The blade is
        sharp, well-kept, and shows no sign of age or wear-and-tear, only the slight
        discoloration of the leather-strip handle would clue you in to the age of the thing.`,ao=`rules:
  systems:
    randomness: false
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,lo=`scene:
  id: prologue_awake

  nodes:

    ##########################################
    ### PROLOGUE SCENE 1 | AWAKE - BEDROOM ###
    ##########################################

    - id: awake

      text: 
        - key: prologue.awake.intro
        - key: prologue.awake.notice_board
        - key: prologue.awake.make_ready
        - if:
            eq:
              var: looked_around
              value: true
          then:
            key: prologue.awake.look_around
        - if:
            eq:
              var: took_stuff
              value: true
          then:
            key: prologue.awake.take_stuff
      
      choices:
        - id: look_around
          text: prologue.choice.look_around
          if:
            eq:
              var: looked_around
              value: false
          effects:
            - set:
                var: looked_around
                value: true
          goto:
            scene: prologue_awake
            node: awake

        - id: take_stuff
          text: prologue.choice.take_stuff
          if:
            eq:
              var: took_stuff
              value: false
          effects:
            - set:
                var: took_stuff
                value: true
            - add_item:
                id: gas_mask
            - add_item:
                id: taskbook
          goto:
            scene: prologue_awake
            node: awake
          
        - id: head_out
          text: prologue.choice.head_out
          if:
            all:
              - eq:
                  var: took_stuff
                  value: true
              - eq:
                  var: looked_around
                  value: true
          goto:
            scene: prologue_awake
            node: corridor

    ###################################
    ### PROLOGUE SCENE 2 | CORRIDOR ###
    ###################################

    - id: corridor

      text:
        - key: prologue.corridor.intro
        - key: prologue.corridor.see_signs

        - if:
            eq:
              var: has_read_signs
              value: true
          then:
            key: prologue.corridor.read_signs
        - if:
            eq:
              var: has_read_signs
              value: true
          then:
            key: prologue.corridor.sign_1
        - if:
            eq:
              var: has_read_signs
              value: true
          then:
            key: prologue.corridor.sign_2
        - if:
            eq:
              var: has_read_signs
              value: true
          then:
            key: prologue.corridor.sign_3

      choices:
        - id: corridor_read_signs
          text: prologue.choice.read_signs
          if:
            eq:
              var: has_read_signs
              value: false
          effects:
            - set:
                var: has_read_signs
                value: true
          goto:
            scene: prologue_awake
            node: corridor
        - id: corridor_head_left
          text: prologue.choice.head_left
          if:
            all:
              - eq:
                  var: has_read_signs
                  value: true
              - eq:
                  var: has_gone_to_armory
                  value: false
          effects:
            - set:
                var: has_gone_to_armory
                value: true
          goto:
            scene: prologue_awake
            node: munitions

    ##############################################
    ### PROLOGUE SCENE 2.1 | MUNITIONS STORAGE ###
    ##############################################

    - id: munitions
      
      text:
        - key: prologue.munitions.intro

        - if:
            eq:
              var: inspected_crates
              value: true
          then:
            key: prologue.munitions.inspect_crates
        - if:
            eq:
              var: inspected_crates_again
              value: true
          then:
            key: prologue.munitions.inspect_crates_again
        - if:
            eq:
              var: qm_dialogue_flag_1
              value: true
          then:
            key: prologue.munitions.speak_to_quartermaster
        - if:
            eq:
              var: qm_dialogue_flag_1
              value: true
          then:
            key: prologue.munitions.quartermaster_dialogue_1
        - if:
            eq:
              var: qm_dialogue_flag_2a
              value: true
          then:
            key: prologue.munitions.quartermaster_dialogue_2a
        - if:
            eq:
              var: qm_dialogue_flag_2b
              value: true
          then:
            key: prologue.munitions.quartermaster_dialogue_2b
        - if:
            all:
              - eq:
                  var: qm_dialogue_flag_3
                  value: true
              - eq:
                  var: qm_dialogue_flag_2a
                  value: true
          then:
            key: prologue.munitions.goodbye_qm_a
        - if:
            all:
              - eq:
                  var: qm_dialogue_flag_3
                  value: true
              - eq:
                  var: qm_dialogue_flag_2b
                  value: true
          then:
            key: prologue.munitions.goodbye_qm_b

      choices:
        - id: inspect_crates
          text: prologue.choice.inspect_crates
          if:
            eq:
              var: inspected_crates
              value: false
          effects:
            - set:
                var: inspected_crates
                value: true
          goto:
            scene: prologue_awake
            node: munitions

        - id: inspect_crates_again
          text: prologue.choice.inspect_crates
          if:
            all:
              - eq:
                  var: inspected_crates
                  value: true
              - eq:
                  var: inspected_crates_again
                  value: false
          effects:
            - set:
                var: inspected_crates_again
                value: true
          goto:
            scene: prologue_awake
            node: munitions

        - id: approach_armory
          text: prologue.choice.approach_armory
          if:
            eq:
              var: qm_dialogue_flag_1
              value: false
          effects:
            - set:
                var: qm_dialogue_flag_1
                value: true
          goto:
            scene: prologue_awake
            node: munitions

        - id: talk_to_qm_1a
          text: prologue.choice.talk_to_qm_1a
          if:
            all:
              - eq:
                  var: qm_dialogue_flag_1
                  value: true
              - eq:
                  var: qm_dialogue_flag_2a
                  value: false
              - eq:
                  var: qm_dialogue_flag_2b
                  value: false
          effects:
            - set:
                var: qm_dialogue_flag_2a
                value: true
          goto:
            scene: prologue_awake
            node: munitions
        - id: talk_to_qm_1b
          text: prologue.choice.talk_to_qm_1b
          if:
            all:
              - eq:
                  var: qm_dialogue_flag_1
                  value: true
              - eq:
                  var: qm_dialogue_flag_2a
                  value: false
              - eq:
                  var: qm_dialogue_flag_2b
                  value: false
          effects:
            - set:
                var: qm_dialogue_flag_2b
                value: true
          goto:
            scene: prologue_awake
            node: munitions

        - id: talk_to_qm_2a
          text: prologue.choice.talk_to_qm_2
          if:
            all:
              - eq:
                  var: qm_dialogue_flag_2a
                  value: true
              - eq:
                  var: qm_dialogue_flag_3
                  value: false
          effects:
            - set:
                var: qm_dialogue_flag_3
                value: true
          goto:
            scene: prologue_awake
            node: munitions
        - id: talk_to_qm_2b
          text: prologue.choice.talk_to_qm_2
          if:
            all:
              - eq:
                  var: qm_dialogue_flag_2b
                  value: true
              - eq:
                  var: qm_dialogue_flag_3
                  value: false
          effects:
            - set:
                var: qm_dialogue_flag_3
                value: true
            - add_item:
                id: service_rifle
            - add_item:
                id: service_rifle_ammunition
            - add_item:
                id: service_bayonet
          goto:
            scene: prologue_awake
            node: munitions

        - id: return_to_corridor
          text: prologue.choice.return_to_corridor
          if:
            eq:
              var: qm_dialogue_flag_3
              value: true
          goto:
            scene: prologue_awake
            node: corridor
        

`,co=`state:
  variables:

    # Narrative progression flags

    ### PROLOGUE SCENE 1 | AWAKE - BEDROOM ###
    looked_around:
      type: boolean
      initial: false
      visible: true

    took_stuff:
      type: boolean
      initial: false
      visible: true

    ### PROLOGUE SCENE 2 | CORRIDOR ###
    has_read_signs:
      type: boolean
      initial: false
      visible: true

    has_gone_to_armory:
      type: boolean
      initial: false
      visible: true

    qm_dialogue_flag_1:
      type: boolean
      initial: false
      visible: true

    qm_dialogue_flag_2a:
      type: boolean
      initial: false
      visible: true

    qm_dialogue_flag_2b:
      type: boolean
      initial: false
      visible: true

    qm_dialogue_flag_3:
      type: boolean
      initial: false
      visible: true

    ### PROLOGUE SCENE 2.1 | MUNITIONS STORAGE ###
    inspected_crates:
      type: boolean
      initial: false
      visible: true
    
    inspected_crates_again:
      type: boolean
      initial: false
      visible: true

    start_talk_qm:
      type: boolean
      initial: false
      visible: true

    end_talk_qm:
      type: boolean
      initial: false
      visible: true

    taken_weapon:
      type: boolean
      initial: false
      visible: true

    # operator_trust:
    #   type: number
    #   initial: 0
    #   visible: true`,Tn=Symbol.for("yaml.alias"),kn=Symbol.for("yaml.document"),Fe=Symbol.for("yaml.map"),qi=Symbol.for("yaml.pair"),$e=Symbol.for("yaml.scalar"),gt=Symbol.for("yaml.seq"),Te=Symbol.for("yaml.node.type"),ze=n=>!!n&&typeof n=="object"&&n[Te]===Tn,en=n=>!!n&&typeof n=="object"&&n[Te]===kn,qt=n=>!!n&&typeof n=="object"&&n[Te]===Fe,ne=n=>!!n&&typeof n=="object"&&n[Te]===qi,x=n=>!!n&&typeof n=="object"&&n[Te]===$e,Mt=n=>!!n&&typeof n=="object"&&n[Te]===gt;function ee(n){if(n&&typeof n=="object")switch(n[Te]){case Fe:case gt:return!0}return!1}function te(n){if(n&&typeof n=="object")switch(n[Te]){case Tn:case Fe:case $e:case gt:return!0}return!1}const Mi=n=>(x(n)||ee(n))&&!!n.anchor,Ve=Symbol("break visit"),uo=Symbol("skip children"),Nt=Symbol("remove node");function pt(n,e){const t=fo(e);en(n)?nt(null,n.contents,t,Object.freeze([n]))===Nt&&(n.contents=null):nt(null,n,t,Object.freeze([]))}pt.BREAK=Ve;pt.SKIP=uo;pt.REMOVE=Nt;function nt(n,e,t,i){const s=ho(n,e,t,i);if(te(s)||ne(s))return mo(n,i,s),nt(n,s,t,i);if(typeof s!="symbol"){if(ee(e)){i=Object.freeze(i.concat(e));for(let o=0;o<e.items.length;++o){const r=nt(o,e.items[o],t,i);if(typeof r=="number")o=r-1;else{if(r===Ve)return Ve;r===Nt&&(e.items.splice(o,1),o-=1)}}}else if(ne(e)){i=Object.freeze(i.concat(e));const o=nt("key",e.key,t,i);if(o===Ve)return Ve;o===Nt&&(e.key=null);const r=nt("value",e.value,t,i);if(r===Ve)return Ve;r===Nt&&(e.value=null)}}return s}function fo(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function ho(n,e,t,i){var s,o,r,a,l;if(typeof t=="function")return t(n,e,i);if(qt(e))return(s=t.Map)==null?void 0:s.call(t,n,e,i);if(Mt(e))return(o=t.Seq)==null?void 0:o.call(t,n,e,i);if(ne(e))return(r=t.Pair)==null?void 0:r.call(t,n,e,i);if(x(e))return(a=t.Scalar)==null?void 0:a.call(t,n,e,i);if(ze(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,i)}function mo(n,e,t){const i=e[e.length-1];if(ee(i))i.items[n]=t;else if(ne(i))n==="key"?i.key=t:i.value=t;else if(en(i))i.contents=t;else{const s=ze(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const go={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},po=n=>n.replace(/[!,[\]{}]/g,e=>go[e]);class ge{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ge.defaultYaml,e),this.tags=Object.assign({},ge.defaultTags,t)}clone(){const e=new ge(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new ge(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ge.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ge.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:ge.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ge.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),s=i.shift();switch(s){case"%TAG":{if(i.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[o,r]=i;return this.tags[o]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[o]=i;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const r=/^\d+\.\d+$/.test(o);return t(6,`Unsupported YAML version ${o}`,r),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const r=e.slice(2,-1);return r==="!"||r==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),r)}const[,i,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const o=this.tags[i];if(o)try{return o+decodeURIComponent(s)}catch(r){return t(String(r)),null}return i==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+po(e.substring(i.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let s;if(e&&i.length>0&&te(e.contents)){const o={};pt(e.contents,(r,a)=>{te(a)&&a.tag&&(o[a.tag]=!0)}),s=Object.keys(o)}else s=[];for(const[o,r]of i)o==="!!"&&r==="tag:yaml.org,2002:"||(!e||s.some(a=>a.startsWith(r)))&&t.push(`%TAG ${o} ${r}`);return t.join(`
`)}}ge.defaultYaml={explicit:!1,version:"1.2"};ge.defaultTags={"!!":"tag:yaml.org,2002:"};function Ri(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function Pi(n){const e=new Set;return pt(n,{Value(t,i){i.anchor&&e.add(i.anchor)}}),e}function Bi(n,e){for(let t=1;;++t){const i=`${n}${t}`;if(!e.has(i))return i}}function _o(n,e){const t=[],i=new Map;let s=null;return{onAnchor:o=>{t.push(o),s??(s=Pi(n));const r=Bi(e,s);return s.add(r),r},setAnchors:()=>{for(const o of t){const r=i.get(o);if(typeof r=="object"&&r.anchor&&(x(r.node)||ee(r.node)))r.node.anchor=r.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=o,a}}},sourceObjects:i}}function it(n,e,t,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let s=0,o=i.length;s<o;++s){const r=i[s],a=it(n,i,String(s),r);a===void 0?delete i[s]:a!==r&&(i[s]=a)}else if(i instanceof Map)for(const s of Array.from(i.keys())){const o=i.get(s),r=it(n,i,s,o);r===void 0?i.delete(s):r!==o&&i.set(s,r)}else if(i instanceof Set)for(const s of Array.from(i)){const o=it(n,i,s,s);o===void 0?i.delete(s):o!==s&&(i.delete(s),i.add(o))}else for(const[s,o]of Object.entries(i)){const r=it(n,i,s,o);r===void 0?delete i[s]:r!==o&&(i[s]=r)}return n.call(e,t,i)}function Oe(n,e,t){if(Array.isArray(n))return n.map((i,s)=>Oe(i,String(s),t));if(n&&typeof n.toJSON=="function"){if(!t||!Mi(n))return n.toJSON(e,t);const i={aliasCount:0,count:1,res:void 0};t.anchors.set(n,i),t.onCreate=o=>{i.res=o,delete t.onCreate};const s=n.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class An{constructor(e){Object.defineProperty(this,Te,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:s,reviver:o}={}){if(!en(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},a=Oe(this,"",r);if(typeof s=="function")for(const{count:l,res:c}of r.anchors.values())s(c,l);return typeof o=="function"?it(o,{"":a},"",a):a}}class Ln extends An{constructor(e){super(Tn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let i;t!=null&&t.aliasResolveCache?i=t.aliasResolveCache:(i=[],pt(e,{Node:(o,r)=>{(ze(r)||Mi(r))&&i.push(r)}}),t&&(t.aliasResolveCache=i));let s;for(const o of i){if(o===this)break;o.anchor===this.source&&(s=o)}return s}toJSON(e,t){if(!t)return{source:this.source};const{anchors:i,doc:s,maxAliasCount:o}=t,r=this.resolve(s,t);if(!r){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=i.get(r);if(a||(Oe(r,null,t),a=i.get(r)),(a==null?void 0:a.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Ht(s,r,i)),a.count*a.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(e,t,i){const s=`*${this.source}`;if(e){if(Ri(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(e.implicitKey)return`${s} `}return s}}function Ht(n,e,t){if(ze(e)){const i=e.resolve(n),s=t&&i&&t.get(i);return s?s.count*s.aliasCount:0}else if(ee(e)){let i=0;for(const s of e.items){const o=Ht(n,s,t);o>i&&(i=o)}return i}else if(ne(e)){const i=Ht(n,e.key,t),s=Ht(n,e.value,t);return Math.max(i,s)}return 1}const Fi=n=>!n||typeof n!="function"&&typeof n!="object";class D extends An{constructor(e){super($e),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:Oe(this.value,e,t)}toString(){return String(this.value)}}D.BLOCK_FOLDED="BLOCK_FOLDED";D.BLOCK_LITERAL="BLOCK_LITERAL";D.PLAIN="PLAIN";D.QUOTE_DOUBLE="QUOTE_DOUBLE";D.QUOTE_SINGLE="QUOTE_SINGLE";const yo="tag:yaml.org,2002:";function bo(n,e,t){if(e){const i=t.filter(o=>o.tag===e),s=i.find(o=>!o.format)??i[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(i=>{var s;return((s=i.identify)==null?void 0:s.call(i,n))&&!i.format})}function At(n,e,t){var u,h,m;if(en(n)&&(n=n.contents),te(n))return n;if(ne(n)){const _=(h=(u=t.schema[Fe]).createNode)==null?void 0:h.call(u,t.schema,null,t);return _.items.push(n),_}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:i,onAnchor:s,onTagObj:o,schema:r,sourceObjects:a}=t;let l;if(i&&n&&typeof n=="object"){if(l=a.get(n),l)return l.anchor??(l.anchor=s(n)),new Ln(l.anchor);l={anchor:null,node:null},a.set(n,l)}e!=null&&e.startsWith("!!")&&(e=yo+e.slice(2));let c=bo(n,e,r.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const _=new D(n);return l&&(l.node=_),_}c=n instanceof Map?r[Fe]:Symbol.iterator in Object(n)?r[gt]:r[Fe]}o&&(o(c),delete t.onTagObj);const f=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((m=c==null?void 0:c.nodeClass)==null?void 0:m.from)=="function"?c.nodeClass.from(t.schema,n,t):new D(n);return e?f.tag=e:c.default||(f.tag=c.tag),l&&(l.node=f),f}function Qt(n,e,t){let i=t;for(let s=e.length-1;s>=0;--s){const o=e[s];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const r=[];r[o]=i,i=r}else i=new Map([[o,i]])}return At(i,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const kt=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class Ui extends An{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(i=>te(i)||ne(i)?i.clone(e):i),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(kt(e))this.add(t);else{const[i,...s]=e,o=this.get(i,!0);if(ee(o))o.addIn(s,t);else if(o===void 0&&this.schema)this.set(i,Qt(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}deleteIn(e){const[t,...i]=e;if(i.length===0)return this.delete(t);const s=this.get(t,!0);if(ee(s))return s.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...s]=e,o=this.get(i,!0);return s.length===0?!t&&x(o)?o.value:o:ee(o)?o.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!ne(t))return!1;const i=t.value;return i==null||e&&x(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(i.length===0)return this.has(t);const s=this.get(t,!0);return ee(s)?s.hasIn(i):!1}setIn(e,t){const[i,...s]=e;if(s.length===0)this.set(i,t);else{const o=this.get(i,!0);if(ee(o))o.setIn(s,t);else if(o===void 0&&this.schema)this.set(i,Qt(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}}const wo=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function De(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Ge=(n,e,t)=>n.endsWith(`
`)?De(t,e):t.includes(`
`)?`
`+De(t,e):(n.endsWith(" ")?"":" ")+t,Ki="flow",Sn="block",Jt="quoted";function tn(n,e,t="flow",{indentAtStart:i,lineWidth:s=80,minContentWidth:o=20,onFold:r,onOverflow:a}={}){if(!s||s<0)return n;s<o&&(o=0);const l=Math.max(1+o,1+s-e.length);if(n.length<=l)return n;const c=[],f={};let u=s-e.length;typeof i=="number"&&(i>s-Math.max(2,o)?c.push(0):u=s-i);let h,m,_=!1,d=-1,g=-1,y=-1;t===Sn&&(d=Qn(n,d,e.length),d!==-1&&(u=d+l));for(let E;E=n[d+=1];){if(t===Jt&&E==="\\"){switch(g=d,n[d+1]){case"x":d+=3;break;case"u":d+=5;break;case"U":d+=9;break;default:d+=1}y=d}if(E===`
`)t===Sn&&(d=Qn(n,d,e.length)),u=d+e.length+l,h=void 0;else{if(E===" "&&m&&m!==" "&&m!==`
`&&m!=="	"){const S=n[d+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(h=d)}if(d>=u)if(h)c.push(h),u=h+l,h=void 0;else if(t===Jt){for(;m===" "||m==="	";)m=E,E=n[d+=1],_=!0;const S=d>y+1?d-2:g-1;if(f[S])return n;c.push(S),f[S]=!0,u=S+l,h=void 0}else _=!0}m=E}if(_&&a&&a(),c.length===0)return n;r&&r();let v=n.slice(0,c[0]);for(let E=0;E<c.length;++E){const S=c[E],T=c[E+1]||n.length;S===0?v=`
${e}${n.slice(0,T)}`:(t===Jt&&f[S]&&(v+=`${n[S]}\\`),v+=`
${e}${n.slice(S+1,T)}`)}return v}function Qn(n,e,t){let i=e,s=e+1,o=n[s];for(;o===" "||o==="	";)if(e<s+t)o=n[++e];else{do o=n[++e];while(o&&o!==`
`);i=e,s=e+1,o=n[s]}return i}const nn=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),sn=n=>/^(%|---|\.\.\.)/m.test(n);function vo(n,e,t){if(!e||e<0)return!1;const i=e-t,s=n.length;if(s<=i)return!1;for(let o=0,r=0;o<s;++o)if(n[o]===`
`){if(o-r>i)return!0;if(r=o+1,s-r<=i)return!1}return!0}function It(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:i}=e,s=e.options.doubleQuotedMinMultiLineLength,o=e.indent||(sn(n)?"  ":"");let r="",a=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(r+=t.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{r+=t.slice(a,l);const f=t.substr(l+2,4);switch(f){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:f.substr(0,2)==="00"?r+="\\x"+f.substr(2):r+=t.substr(l,6)}l+=5,a=l+1}break;case"n":if(i||t[l+2]==='"'||t.length<s)l+=1;else{for(r+=t.slice(a,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)r+=`
`,l+=2;r+=o,t[l+2]===" "&&(r+="\\"),l+=1,a=l+1}break;default:l+=1}return r=a?r+t.slice(a):t,i?r:tn(r,o,Jt,nn(e,!1))}function En(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return It(n,e);const t=e.indent||(sn(n)?"  ":""),i="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?i:tn(i,t,Ki,nn(e,!1))}function st(n,e){const{singleQuote:t}=e.options;let i;if(t===!1)i=It;else{const s=n.includes('"'),o=n.includes("'");s&&!o?i=En:o&&!s?i=It:i=t?En:It}return i(n,e)}let Nn;try{Nn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Nn=/\n+(?!\n|$)/g}function zt({comment:n,type:e,value:t},i,s,o){const{blockQuote:r,commentString:a,lineWidth:l}=i.options;if(!r||/\n[\t ]+$/.test(t))return st(t,i);const c=i.indent||(i.forceBlockIndent||sn(t)?"  ":""),f=r==="literal"?!0:r==="folded"||e===D.BLOCK_FOLDED?!1:e===D.BLOCK_LITERAL?!0:!vo(t,l,c.length);if(!t)return f?`|
`:`>
`;let u,h;for(h=t.length;h>0;--h){const T=t[h-1];if(T!==`
`&&T!=="	"&&T!==" ")break}let m=t.substring(h);const _=m.indexOf(`
`);_===-1?u="-":t===m||_!==m.length-1?(u="+",o&&o()):u="",m&&(t=t.slice(0,-m.length),m[m.length-1]===`
`&&(m=m.slice(0,-1)),m=m.replace(Nn,`$&${c}`));let d=!1,g,y=-1;for(g=0;g<t.length;++g){const T=t[g];if(T===" ")d=!0;else if(T===`
`)y=g;else break}let v=t.substring(0,y<g?y+1:g);v&&(t=t.substring(v.length),v=v.replace(/\n+/g,`$&${c}`));let S=(d?c?"2":"1":"")+u;if(n&&(S+=" "+a(n.replace(/ ?[\r\n]+/g," ")),s&&s()),!f){const T=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let A=!1;const w=nn(i,!0);r!=="folded"&&e!==D.BLOCK_FOLDED&&(w.onOverflow=()=>{A=!0});const b=tn(`${v}${T}${m}`,c,Sn,w);if(!A)return`>${S}
${c}${b}`}return t=t.replace(/\n+/g,`$&${c}`),`|${S}
${c}${v}${t}${m}`}function ko(n,e,t,i){const{type:s,value:o}=n,{actualString:r,implicitKey:a,indent:l,indentStep:c,inFlow:f}=e;if(a&&o.includes(`
`)||f&&/[[\]{},]/.test(o))return st(o,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return a||f||!o.includes(`
`)?st(o,e):zt(n,e,t,i);if(!a&&!f&&s!==D.PLAIN&&o.includes(`
`))return zt(n,e,t,i);if(sn(o)){if(l==="")return e.forceBlockIndent=!0,zt(n,e,t,i);if(a&&l===c)return st(o,e)}const u=o.replace(/\n+/g,`$&
${l}`);if(r){const h=d=>{var g;return d.default&&d.tag!=="tag:yaml.org,2002:str"&&((g=d.test)==null?void 0:g.test(u))},{compat:m,tags:_}=e.doc.schema;if(_.some(h)||m!=null&&m.some(h))return st(o,e)}return a?u:tn(u,l,Ki,nn(e,!1))}function Cn(n,e,t,i){const{implicitKey:s,inFlow:o}=e,r=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:a}=n;a!==D.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(a=D.QUOTE_DOUBLE);const l=f=>{switch(f){case D.BLOCK_FOLDED:case D.BLOCK_LITERAL:return s||o?st(r.value,e):zt(r,e,t,i);case D.QUOTE_DOUBLE:return It(r.value,e);case D.QUOTE_SINGLE:return En(r.value,e);case D.PLAIN:return ko(r,e,t,i);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:f,defaultStringType:u}=e.options,h=s&&f||u;if(c=l(h),c===null)throw new Error(`Unsupported default string type ${h}`)}return c}function ji(n,e){const t=Object.assign({blockQuote:!0,commentString:wo,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let i;switch(t.collectionStyle){case"block":i=!1;break;case"flow":i=!0;break;default:i=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:i,options:t}}function So(n,e){var s;if(e.tag){const o=n.filter(r=>r.tag===e.tag);if(o.length>0)return o.find(r=>r.format===e.format)??o[0]}let t,i;if(x(e)){i=e.value;let o=n.filter(r=>{var a;return(a=r.identify)==null?void 0:a.call(r,i)});if(o.length>1){const r=o.filter(a=>a.test);r.length>0&&(o=r)}t=o.find(r=>r.format===e.format)??o.find(r=>!r.format)}else i=e,t=n.find(o=>o.nodeClass&&i instanceof o.nodeClass);if(!t){const o=((s=i==null?void 0:i.constructor)==null?void 0:s.name)??(i===null?"null":typeof i);throw new Error(`Tag not resolved for ${o} value`)}return t}function Eo(n,e,{anchors:t,doc:i}){if(!i.directives)return"";const s=[],o=(x(n)||ee(n))&&n.anchor;o&&Ri(o)&&(t.add(o),s.push(`&${o}`));const r=n.tag??(e.default?null:e.tag);return r&&s.push(i.directives.tagString(r)),s.join(" ")}function ht(n,e,t,i){var l;if(ne(n))return n.toString(e,t,i);if(ze(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let s;const o=te(n)?n:e.doc.createNode(n,{onTagObj:c=>s=c});s??(s=So(e.doc.schema.tags,o));const r=Eo(o,s,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);const a=typeof s.stringify=="function"?s.stringify(o,e,t,i):x(o)?Cn(o,e,t,i):o.toString(e,t,i);return r?x(o)||a[0]==="{"||a[0]==="["?`${r} ${a}`:`${r}
${e.indent}${a}`:a}function No({key:n,value:e},t,i,s){const{allNullValues:o,doc:r,indent:a,indentStep:l,options:{commentString:c,indentSeq:f,simpleKeys:u}}=t;let h=te(n)&&n.comment||null;if(u){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(ee(n)||!te(n)&&typeof n=="object"){const w="With simple keys, collection cannot be used as a key value";throw new Error(w)}}let m=!u&&(!n||h&&e==null&&!t.inFlow||ee(n)||(x(n)?n.type===D.BLOCK_FOLDED||n.type===D.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!m&&(u||!o),indent:a+l});let _=!1,d=!1,g=ht(n,t,()=>_=!0,()=>d=!0);if(!m&&!t.inFlow&&g.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(t.inFlow){if(o||e==null)return _&&i&&i(),g===""?"?":m?`? ${g}`:g}else if(o&&!u||e==null&&m)return g=`? ${g}`,h&&!_?g+=Ge(g,t.indent,c(h)):d&&s&&s(),g;_&&(h=null),m?(h&&(g+=Ge(g,t.indent,c(h))),g=`? ${g}
${a}:`):(g=`${g}:`,h&&(g+=Ge(g,t.indent,c(h))));let y,v,E;te(e)?(y=!!e.spaceBefore,v=e.commentBefore,E=e.comment):(y=!1,v=null,E=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!m&&!h&&x(e)&&(t.indentAtStart=g.length+1),d=!1,!f&&l.length>=2&&!t.inFlow&&!m&&Mt(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let S=!1;const T=ht(e,t,()=>S=!0,()=>d=!0);let A=" ";if(h||y||v){if(A=y?`
`:"",v){const w=c(v);A+=`
${De(w,t.indent)}`}T===""&&!t.inFlow?A===`
`&&E&&(A=`

`):A+=`
${t.indent}`}else if(!m&&ee(e)){const w=T[0],b=T.indexOf(`
`),I=b!==-1,U=t.inFlow??e.flow??e.items.length===0;if(I||!U){let R=!1;if(I&&(w==="&"||w==="!")){let K=T.indexOf(" ");w==="&"&&K!==-1&&K<b&&T[K+1]==="!"&&(K=T.indexOf(" ",K+1)),(K===-1||b<K)&&(R=!0)}R||(A=`
${t.indent}`)}}else(T===""||T[0]===`
`)&&(A="");return g+=A+T,t.inFlow?S&&i&&i():E&&!S?g+=Ge(g,t.indent,c(E)):d&&s&&s(),g}function Vi(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Bt="<<",qe={identify:n=>n===Bt||typeof n=="symbol"&&n.description===Bt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new D(Symbol(Bt)),{addToJSMap:xi}),stringify:()=>Bt},Io=(n,e)=>(qe.identify(e)||x(e)&&(!e.type||e.type===D.PLAIN)&&qe.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===qe.tag&&t.default));function xi(n,e,t){if(t=n&&ze(t)?t.resolve(n.doc):t,Mt(t))for(const i of t.items)dn(n,e,i);else if(Array.isArray(t))for(const i of t)dn(n,e,i);else dn(n,e,t)}function dn(n,e,t){const i=n&&ze(t)?t.resolve(n.doc):t;if(!qt(i))throw new Error("Merge sources must be maps or map aliases");const s=i.toJSON(null,n,Map);for(const[o,r]of s)e instanceof Map?e.has(o)||e.set(o,r):e instanceof Set?e.add(o):Object.prototype.hasOwnProperty.call(e,o)||Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function Gi(n,e,{key:t,value:i}){if(te(t)&&t.addToJSMap)t.addToJSMap(n,e,i);else if(Io(n,t))xi(n,e,i);else{const s=Oe(t,"",n);if(e instanceof Map)e.set(s,Oe(i,s,n));else if(e instanceof Set)e.add(s);else{const o=Oo(t,s,n),r=Oe(i,o,n);o in e?Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[o]=r}}return e}function Oo(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(te(n)&&(t!=null&&t.doc)){const i=ji(t.doc,{});i.anchors=new Set;for(const o of t.anchors.keys())i.anchors.add(o.anchor);i.inFlow=!0,i.inStringifyKey=!0;const s=n.toString(i);if(!t.mapKeyWarned){let o=JSON.stringify(s);o.length>40&&(o=o.substring(0,36)+'..."'),Vi(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function $n(n,e,t){const i=At(n,void 0,t),s=At(e,void 0,t);return new pe(i,s)}class pe{constructor(e,t=null){Object.defineProperty(this,Te,{value:qi}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return te(t)&&(t=t.clone(e)),te(i)&&(i=i.clone(e)),new pe(t,i)}toJSON(e,t){const i=t!=null&&t.mapAsMap?new Map:{};return Gi(t,i,this)}toString(e,t,i){return e!=null&&e.doc?No(this,e,t,i):JSON.stringify(this)}}function Yi(n,e,t){return(e.inFlow??n.flow?Ao:To)(n,e,t)}function To({comment:n,items:e},t,{blockItemPrefix:i,flowChars:s,itemIndent:o,onChompKeep:r,onComment:a}){const{indent:l,options:{commentString:c}}=t,f=Object.assign({},t,{indent:o,type:null});let u=!1;const h=[];for(let _=0;_<e.length;++_){const d=e[_];let g=null;if(te(d))!u&&d.spaceBefore&&h.push(""),Xt(t,h,d.commentBefore,u),d.comment&&(g=d.comment);else if(ne(d)){const v=te(d.key)?d.key:null;v&&(!u&&v.spaceBefore&&h.push(""),Xt(t,h,v.commentBefore,u))}u=!1;let y=ht(d,f,()=>g=null,()=>u=!0);g&&(y+=Ge(y,o,c(g))),u&&g&&(u=!1),h.push(i+y)}let m;if(h.length===0)m=s.start+s.end;else{m=h[0];for(let _=1;_<h.length;++_){const d=h[_];m+=d?`
${l}${d}`:`
`}}return n?(m+=`
`+De(c(n),l),a&&a()):u&&r&&r(),m}function Ao({items:n},e,{flowChars:t,itemIndent:i}){const{indent:s,indentStep:o,flowCollectionPadding:r,options:{commentString:a}}=e;i+=o;const l=Object.assign({},e,{indent:i,inFlow:!0,type:null});let c=!1,f=0;const u=[];for(let _=0;_<n.length;++_){const d=n[_];let g=null;if(te(d))d.spaceBefore&&u.push(""),Xt(e,u,d.commentBefore,!1),d.comment&&(g=d.comment);else if(ne(d)){const v=te(d.key)?d.key:null;v&&(v.spaceBefore&&u.push(""),Xt(e,u,v.commentBefore,!1),v.comment&&(c=!0));const E=te(d.value)?d.value:null;E?(E.comment&&(g=E.comment),E.commentBefore&&(c=!0)):d.value==null&&(v!=null&&v.comment)&&(g=v.comment)}g&&(c=!0);let y=ht(d,l,()=>g=null);_<n.length-1&&(y+=","),g&&(y+=Ge(y,i,a(g))),!c&&(u.length>f||y.includes(`
`))&&(c=!0),u.push(y),f=u.length}const{start:h,end:m}=t;if(u.length===0)return h+m;if(!c){const _=u.reduce((d,g)=>d+g.length+2,2);c=e.options.lineWidth>0&&_>e.options.lineWidth}if(c){let _=h;for(const d of u)_+=d?`
${o}${s}${d}`:`
`;return`${_}
${s}${m}`}else return`${h}${r}${u.join(" ")}${r}${m}`}function Xt({indent:n,options:{commentString:e}},t,i,s){if(i&&s&&(i=i.replace(/^\n+/,"")),i){const o=De(e(i),n);t.push(o.trimStart())}}function Ye(n,e){const t=x(e)?e.value:e;for(const i of n)if(ne(i)&&(i.key===e||i.key===t||x(i.key)&&i.key.value===t))return i}class Ne extends Ui{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Fe,e),this.items=[]}static from(e,t,i){const{keepUndefined:s,replacer:o}=i,r=new this(e),a=(l,c)=>{if(typeof o=="function")c=o.call(t,l,c);else if(Array.isArray(o)&&!o.includes(l))return;(c!==void 0||s)&&r.items.push($n(l,c,i))};if(t instanceof Map)for(const[l,c]of t)a(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))a(l,t[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){var r;let i;ne(e)?i=e:!e||typeof e!="object"||!("key"in e)?i=new pe(e,e==null?void 0:e.value):i=new pe(e.key,e.value);const s=Ye(this.items,i.key),o=(r=this.schema)==null?void 0:r.sortMapEntries;if(s){if(!t)throw new Error(`Key ${i.key} already set`);x(s.value)&&Fi(i.value)?s.value.value=i.value:s.value=i.value}else if(o){const a=this.items.findIndex(l=>o(i,l)<0);a===-1?this.items.push(i):this.items.splice(a,0,i)}else this.items.push(i)}delete(e){const t=Ye(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const i=Ye(this.items,e),s=i==null?void 0:i.value;return(!t&&x(s)?s.value:s)??void 0}has(e){return!!Ye(this.items,e)}set(e,t){this.add(new pe(e,t),!0)}toJSON(e,t,i){const s=i?new i:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const o of this.items)Gi(t,s,o);return s}toString(e,t,i){if(!e)return JSON.stringify(this);for(const s of this.items)if(!ne(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Yi(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const _t={collection:"map",default:!0,nodeClass:Ne,tag:"tag:yaml.org,2002:map",resolve(n,e){return qt(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>Ne.from(n,e,t)};class Je extends Ui{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(gt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Ft(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const i=Ft(e);if(typeof i!="number")return;const s=this.items[i];return!t&&x(s)?s.value:s}has(e){const t=Ft(e);return typeof t=="number"&&t<this.items.length}set(e,t){const i=Ft(e);if(typeof i!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[i];x(s)&&Fi(t)?s.value=t:this.items[i]=t}toJSON(e,t){const i=[];t!=null&&t.onCreate&&t.onCreate(i);let s=0;for(const o of this.items)i.push(Oe(o,String(s++),t));return i}toString(e,t,i){return e?Yi(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:s}=i,o=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let a of t){if(typeof s=="function"){const l=t instanceof Set?a:String(r++);a=s.call(t,l,a)}o.items.push(At(a,void 0,i))}}return o}}function Ft(n){let e=x(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const yt={collection:"seq",default:!0,nodeClass:Je,tag:"tag:yaml.org,2002:seq",resolve(n,e){return Mt(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>Je.from(n,e,t)},on={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,i){return e=Object.assign({actualString:!0},e),Cn(n,e,t,i)}},rn={identify:n=>n==null,createNode:()=>new D(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new D(null),stringify:({source:n},e)=>typeof n=="string"&&rn.test.test(n)?n:e.options.nullStr},Dn={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new D(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&Dn.test.test(n)){const i=n[0]==="t"||n[0]==="T";if(e===i)return n}return e?t.options.trueStr:t.options.falseStr}};function Le({format:n,minFractionDigits:e,tag:t,value:i}){if(typeof i=="bigint")return String(i);const s=typeof i=="number"?i:Number(i);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let o=Object.is(i,-0)?"-0":JSON.stringify(i);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(o)){let r=o.indexOf(".");r<0&&(r=o.length,o+=".");let a=e-(o.length-r-1);for(;a-- >0;)o+="0"}return o}const Hi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Le},Ji={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():Le(n)}},zi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new D(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:Le},an=n=>typeof n=="bigint"||Number.isInteger(n),qn=(n,e,t,{intAsBigInt:i})=>i?BigInt(n):parseInt(n.substring(e),t);function Wi(n,e,t){const{value:i}=n;return an(i)&&i>=0?t+i.toString(e):Le(n)}const Qi={identify:n=>an(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>qn(n,2,8,t),stringify:n=>Wi(n,8,"0o")},Xi={identify:an,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>qn(n,0,10,t),stringify:Le},Zi={identify:n=>an(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>qn(n,2,16,t),stringify:n=>Wi(n,16,"0x")},Lo=[_t,yt,on,rn,Dn,Qi,Xi,Zi,Hi,Ji,zi];function Xn(n){return typeof n=="bigint"||Number.isInteger(n)}const Ut=({value:n})=>JSON.stringify(n),Co=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:Ut},{identify:n=>n==null,createNode:()=>new D(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ut},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:Ut},{identify:Xn,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Xn(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:Ut}],$o={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Do=[_t,yt].concat(Co,$o),Mn={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let s=0;s<t.length;++s)i[s]=t.charCodeAt(s);return i}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},i,s,o){if(!t)return"";const r=t;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<r.length;++c)l+=String.fromCharCode(r[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=D.BLOCK_LITERAL),e!==D.QUOTE_DOUBLE){const l=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),c=Math.ceil(a.length/l),f=new Array(c);for(let u=0,h=0;u<c;++u,h+=l)f[u]=a.substr(h,l);a=f.join(e===D.BLOCK_LITERAL?`
`:" ")}return Cn({comment:n,type:e,value:a},i,s,o)}};function es(n,e){if(Mt(n))for(let t=0;t<n.items.length;++t){let i=n.items[t];if(!ne(i)){if(qt(i)){i.items.length>1&&e("Each pair must have its own sequence indicator");const s=i.items[0]||new pe(new D(null));if(i.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${i.commentBefore}
${s.key.commentBefore}`:i.commentBefore),i.comment){const o=s.value??s.key;o.comment=o.comment?`${i.comment}
${o.comment}`:i.comment}i=s}n.items[t]=ne(i)?i:new pe(i)}}else e("Expected a sequence for this tag");return n}function ts(n,e,t){const{replacer:i}=t,s=new Je(n);s.tag="tag:yaml.org,2002:pairs";let o=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof i=="function"&&(r=i.call(e,String(o++),r));let a,l;if(Array.isArray(r))if(r.length===2)a=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const c=Object.keys(r);if(c.length===1)a=c[0],l=r[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=r;s.items.push($n(a,l,t))}return s}const Rn={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:es,createNode:ts};class lt extends Je{constructor(){super(),this.add=Ne.prototype.add.bind(this),this.delete=Ne.prototype.delete.bind(this),this.get=Ne.prototype.get.bind(this),this.has=Ne.prototype.has.bind(this),this.set=Ne.prototype.set.bind(this),this.tag=lt.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t!=null&&t.onCreate&&t.onCreate(i);for(const s of this.items){let o,r;if(ne(s)?(o=Oe(s.key,"",t),r=Oe(s.value,o,t)):o=Oe(s,"",t),i.has(o))throw new Error("Ordered maps must not include duplicate keys");i.set(o,r)}return i}static from(e,t,i){const s=ts(e,t,i),o=new this;return o.items=s.items,o}}lt.tag="tag:yaml.org,2002:omap";const Pn={collection:"seq",identify:n=>n instanceof Map,nodeClass:lt,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=es(n,e),i=[];for(const{key:s}of t.items)x(s)&&(i.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):i.push(s.value));return Object.assign(new lt,t)},createNode:(n,e,t)=>lt.from(n,e,t)};function ns({value:n,source:e},t){return e&&(n?is:ss).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const is={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new D(!0),stringify:ns},ss={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new D(!1),stringify:ns},qo={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Le},Mo={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():Le(n)}},Ro={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new D(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const i=n.substring(t+1).replace(/_/g,"");i[i.length-1]==="0"&&(e.minFractionDigits=i.length)}return e},stringify:Le},Rt=n=>typeof n=="bigint"||Number.isInteger(n);function ln(n,e,t,{intAsBigInt:i}){const s=n[0];if((s==="-"||s==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),i){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const r=BigInt(n);return s==="-"?BigInt(-1)*r:r}const o=parseInt(n,t);return s==="-"?-1*o:o}function Bn(n,e,t){const{value:i}=n;if(Rt(i)){const s=i.toString(e);return i<0?"-"+t+s.substr(1):t+s}return Le(n)}const Po={identify:Rt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>ln(n,2,2,t),stringify:n=>Bn(n,2,"0b")},Bo={identify:Rt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>ln(n,1,8,t),stringify:n=>Bn(n,8,"0")},Fo={identify:Rt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>ln(n,0,10,t),stringify:Le},Uo={identify:Rt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>ln(n,2,16,t),stringify:n=>Bn(n,16,"0x")};class ct extends Ne{constructor(e){super(e),this.tag=ct.tag}add(e){let t;ne(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new pe(e.key,null):t=new pe(e,null),Ye(this.items,t.key)||this.items.push(t)}get(e,t){const i=Ye(this.items,e);return!t&&ne(i)?x(i.key)?i.key.value:i.key:i}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const i=Ye(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new pe(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:s}=i,o=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof s=="function"&&(r=s.call(t,r,r)),o.items.push($n(r,null,i));return o}}ct.tag="tag:yaml.org,2002:set";const Fn={collection:"map",identify:n=>n instanceof Set,nodeClass:ct,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>ct.from(n,e,t),resolve(n,e){if(qt(n)){if(n.hasAllNullValues(!0))return Object.assign(new ct,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Un(n,e){const t=n[0],i=t==="-"||t==="+"?n.substring(1):n,s=r=>e?BigInt(r):Number(r),o=i.replace(/_/g,"").split(":").reduce((r,a)=>r*s(60)+s(a),s(0));return t==="-"?s(-1)*o:o}function os(n){let{value:e}=n,t=r=>r;if(typeof e=="bigint")t=r=>BigInt(r);else if(isNaN(e)||!isFinite(e))return Le(n);let i="";e<0&&(i="-",e*=t(-1));const s=t(60),o=[e%s];return e<60?o.unshift(0):(e=(e-o[0])/s,o.unshift(e%s),e>=60&&(e=(e-o[0])/s,o.unshift(e))),i+o.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const rs={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Un(n,t),stringify:os},as={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Un(n,!1),stringify:os},cn={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(cn.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,i,s,o,r,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,i-1,s,o||0,r||0,a||0,l);const f=e[8];if(f&&f!=="Z"){let u=Un(f,!1);Math.abs(u)<30&&(u*=60),c-=6e4*u}return new Date(c)},stringify:({value:n})=>(n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Zn=[_t,yt,on,rn,is,ss,Po,Bo,Fo,Uo,qo,Mo,Ro,Mn,qe,Pn,Rn,Fn,rs,as,cn],ei=new Map([["core",Lo],["failsafe",[_t,yt,on]],["json",Do],["yaml11",Zn],["yaml-1.1",Zn]]),ti={binary:Mn,bool:Dn,float:zi,floatExp:Ji,floatNaN:Hi,floatTime:as,int:Xi,intHex:Zi,intOct:Qi,intTime:rs,map:_t,merge:qe,null:rn,omap:Pn,pairs:Rn,seq:yt,set:Fn,timestamp:cn},Ko={"tag:yaml.org,2002:binary":Mn,"tag:yaml.org,2002:merge":qe,"tag:yaml.org,2002:omap":Pn,"tag:yaml.org,2002:pairs":Rn,"tag:yaml.org,2002:set":Fn,"tag:yaml.org,2002:timestamp":cn};function mn(n,e,t){const i=ei.get(e);if(i&&!n)return t&&!i.includes(qe)?i.concat(qe):i.slice();let s=i;if(!s)if(Array.isArray(n))s=[];else{const o=Array.from(ei.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${o} or define customTags array`)}if(Array.isArray(n))for(const o of n)s=s.concat(o);else typeof n=="function"&&(s=n(s.slice()));return t&&(s=s.concat(qe)),s.reduce((o,r)=>{const a=typeof r=="string"?ti[r]:r;if(!a){const l=JSON.stringify(r),c=Object.keys(ti).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return o.includes(a)||o.push(a),o},[])}const jo=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Kn{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:s,schema:o,sortMapEntries:r,toStringDefaults:a}){this.compat=Array.isArray(e)?mn(e,"compat"):e?mn(null,e):null,this.name=typeof o=="string"&&o||"core",this.knownTags=s?Ko:{},this.tags=mn(t,this.name,i),this.toStringOptions=a??null,Object.defineProperty(this,Fe,{value:_t}),Object.defineProperty(this,$e,{value:on}),Object.defineProperty(this,gt,{value:yt}),this.sortMapEntries=typeof r=="function"?r:r===!0?jo:null}clone(){const e=Object.create(Kn.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Vo(n,e){var l;const t=[];let i=e.directives===!0;if(e.directives!==!1&&n.directives){const c=n.directives.toString(n);c?(t.push(c),i=!0):n.directives.docStart&&(i=!0)}i&&t.push("---");const s=ji(n,e),{commentString:o}=s.options;if(n.commentBefore){t.length!==1&&t.unshift("");const c=o(n.commentBefore);t.unshift(De(c,""))}let r=!1,a=null;if(n.contents){if(te(n.contents)){if(n.contents.spaceBefore&&i&&t.push(""),n.contents.commentBefore){const u=o(n.contents.commentBefore);t.push(De(u,""))}s.forceBlockIndent=!!n.comment,a=n.contents.comment}const c=a?void 0:()=>r=!0;let f=ht(n.contents,s,()=>a=null,c);a&&(f+=Ge(f,"",o(a))),(f[0]==="|"||f[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${f}`:t.push(f)}else t.push(ht(n.contents,s));if((l=n.directives)!=null&&l.docEnd)if(n.comment){const c=o(n.comment);c.includes(`
`)?(t.push("..."),t.push(De(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=n.comment;c&&r&&(c=c.replace(/^\n+/,"")),c&&((!r||a)&&t[t.length-1]!==""&&t.push(""),t.push(De(o(c),"")))}return t.join(`
`)+`
`}class un{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Te,{value:kn});let s=null;typeof t=="function"||Array.isArray(t)?s=t:i===void 0&&t&&(i=t,t=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=o;let{version:r}=o;i!=null&&i._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new ge({version:r}),this.setSchema(r,i),this.contents=e===void 0?null:this.createNode(e,s,i)}clone(){const e=Object.create(un.prototype,{[Te]:{value:kn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=te(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Xe(this.contents)&&this.contents.add(e)}addIn(e,t){Xe(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=Pi(this);e.anchor=!t||i.has(t)?Bi(t||"a",i):t}return new Ln(e.anchor)}createNode(e,t,i){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const g=v=>typeof v=="number"||v instanceof String||v instanceof Number,y=t.filter(g).map(String);y.length>0&&(t=t.concat(y)),s=t}else i===void 0&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:o,anchorPrefix:r,flow:a,keepUndefined:l,onTagObj:c,tag:f}=i??{},{onAnchor:u,setAnchors:h,sourceObjects:m}=_o(this,r||"a"),_={aliasDuplicateObjects:o??!0,keepUndefined:l??!1,onAnchor:u,onTagObj:c,replacer:s,schema:this.schema,sourceObjects:m},d=At(e,f,_);return a&&ee(d)&&(d.flow=!0),h(),d}createPair(e,t,i={}){const s=this.createNode(e,null,i),o=this.createNode(t,null,i);return new pe(s,o)}delete(e){return Xe(this.contents)?this.contents.delete(e):!1}deleteIn(e){return kt(e)?this.contents==null?!1:(this.contents=null,!0):Xe(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return ee(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return kt(e)?!t&&x(this.contents)?this.contents.value:this.contents:ee(this.contents)?this.contents.getIn(e,t):void 0}has(e){return ee(this.contents)?this.contents.has(e):!1}hasIn(e){return kt(e)?this.contents!==void 0:ee(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Qt(this.schema,[e],t):Xe(this.contents)&&this.contents.set(e,t)}setIn(e,t){kt(e)?this.contents=t:this.contents==null?this.contents=Qt(this.schema,Array.from(e),t):Xe(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let i;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ge({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new ge({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(i)this.schema=new Kn(Object.assign(i,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:s,onAnchor:o,reviver:r}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},l=Oe(this.contents,t??"",a);if(typeof o=="function")for(const{count:c,res:f}of a.anchors.values())o(f,c);return typeof r=="function"?it(r,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Vo(this,e)}}function Xe(n){if(ee(n))return!0;throw new Error("Expected a YAML collection as document contents")}class ls extends Error{constructor(e,t,i,s){super(),this.name=e,this.code=i,this.message=s,this.pos=t}}class St extends ls{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class xo extends ls{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const ni=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:i,col:s}=t.linePos[0];t.message+=` at line ${i}, column ${s}`;let o=s-1,r=n.substring(e.lineStarts[i-1],e.lineStarts[i]).replace(/[\n\r]+$/,"");if(o>=60&&r.length>80){const a=Math.min(o-39,r.length-79);r="…"+r.substring(a),o-=a-1}if(r.length>80&&(r=r.substring(0,79)+"…"),i>1&&/^ *$/.test(r.substring(0,o))){let a=n.substring(e.lineStarts[i-2],e.lineStarts[i-1]);a.length>80&&(a=a.substring(0,79)+`…
`),r=a+r}if(/[^ ]/.test(r)){let a=1;const l=t.linePos[1];(l==null?void 0:l.line)===i&&l.col>s&&(a=Math.max(1,Math.min(l.col-s,80-o)));const c=" ".repeat(o)+"^".repeat(a);t.message+=`:

${r}
${c}
`}};function dt(n,{flow:e,indicator:t,next:i,offset:s,onError:o,parentIndent:r,startOnNewline:a}){let l=!1,c=a,f=a,u="",h="",m=!1,_=!1,d=null,g=null,y=null,v=null,E=null,S=null,T=null;for(const b of n)switch(_&&(b.type!=="space"&&b.type!=="newline"&&b.type!=="comma"&&o(b.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),_=!1),d&&(c&&b.type!=="comment"&&b.type!=="newline"&&o(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),d=null),b.type){case"space":!e&&(t!=="doc-start"||(i==null?void 0:i.type)!=="flow-collection")&&b.source.includes("	")&&(d=b),f=!0;break;case"comment":{f||o(b,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const I=b.source.substring(1)||" ";u?u+=h+I:u=I,h="",c=!1;break}case"newline":c?u?u+=b.source:(!S||t!=="seq-item-ind")&&(l=!0):h+=b.source,c=!0,m=!0,(g||y)&&(v=b),f=!0;break;case"anchor":g&&o(b,"MULTIPLE_ANCHORS","A node can have at most one anchor"),b.source.endsWith(":")&&o(b.offset+b.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=b,T??(T=b.offset),c=!1,f=!1,_=!0;break;case"tag":{y&&o(b,"MULTIPLE_TAGS","A node can have at most one tag"),y=b,T??(T=b.offset),c=!1,f=!1,_=!0;break}case t:(g||y)&&o(b,"BAD_PROP_ORDER",`Anchors and tags must be after the ${b.source} indicator`),S&&o(b,"UNEXPECTED_TOKEN",`Unexpected ${b.source} in ${e??"collection"}`),S=b,c=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){E&&o(b,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),E=b,c=!1,f=!1;break}default:o(b,"UNEXPECTED_TOKEN",`Unexpected ${b.type} token`),c=!1,f=!1}const A=n[n.length-1],w=A?A.offset+A.source.length:s;return _&&i&&i.type!=="space"&&i.type!=="newline"&&i.type!=="comma"&&(i.type!=="scalar"||i.source!=="")&&o(i.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),d&&(c&&d.indent<=r||(i==null?void 0:i.type)==="block-map"||(i==null?void 0:i.type)==="block-seq")&&o(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:E,found:S,spaceBefore:l,comment:u,hasNewline:m,anchor:g,tag:y,newlineAfterProp:v,end:w,start:T??w}}function Lt(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(Lt(e.key)||Lt(e.value))return!0}return!1;default:return!0}}function In(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){const i=e.end[0];i.indent===n&&(i.source==="]"||i.source==="}")&&Lt(e)&&t(i,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function cs(n,e,t){const{uniqueKeys:i}=n.options;if(i===!1)return!1;const s=typeof i=="function"?i:(o,r)=>o===r||x(o)&&x(r)&&o.value===r.value;return e.some(o=>s(o.key,t))}const ii="All mapping items must start at the same column";function Go({composeNode:n,composeEmptyNode:e},t,i,s,o){var f;const r=(o==null?void 0:o.nodeClass)??Ne,a=new r(t.schema);t.atRoot&&(t.atRoot=!1);let l=i.offset,c=null;for(const u of i.items){const{start:h,key:m,sep:_,value:d}=u,g=dt(h,{indicator:"explicit-key-ind",next:m??(_==null?void 0:_[0]),offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0}),y=!g.found;if(y){if(m&&(m.type==="block-seq"?s(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in m&&m.indent!==i.indent&&s(l,"BAD_INDENT",ii)),!g.anchor&&!g.tag&&!_){c=g.end,g.comment&&(a.comment?a.comment+=`
`+g.comment:a.comment=g.comment);continue}(g.newlineAfterProp||Lt(m))&&s(m??h[h.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((f=g.found)==null?void 0:f.indent)!==i.indent&&s(l,"BAD_INDENT",ii);t.atKey=!0;const v=g.end,E=m?n(t,m,g,s):e(t,v,h,null,g,s);t.schema.compat&&In(i.indent,m,s),t.atKey=!1,cs(t,a.items,E)&&s(v,"DUPLICATE_KEY","Map keys must be unique");const S=dt(_??[],{indicator:"map-value-ind",next:d,offset:E.range[2],onError:s,parentIndent:i.indent,startOnNewline:!m||m.type==="block-scalar"});if(l=S.end,S.found){y&&((d==null?void 0:d.type)==="block-map"&&!S.hasNewline&&s(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&g.start<S.found.offset-1024&&s(E.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const T=d?n(t,d,S,s):e(t,l,_,null,S,s);t.schema.compat&&In(i.indent,d,s),l=T.range[2];const A=new pe(E,T);t.options.keepSourceTokens&&(A.srcToken=u),a.items.push(A)}else{y&&s(E.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),S.comment&&(E.comment?E.comment+=`
`+S.comment:E.comment=S.comment);const T=new pe(E);t.options.keepSourceTokens&&(T.srcToken=u),a.items.push(T)}}return c&&c<l&&s(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[i.offset,l,c??l],a}function Yo({composeNode:n,composeEmptyNode:e},t,i,s,o){const r=(o==null?void 0:o.nodeClass)??Je,a=new r(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=i.offset,c=null;for(const{start:f,value:u}of i.items){const h=dt(f,{indicator:"seq-item-ind",next:u,offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||u)(u==null?void 0:u.type)==="block-seq"?s(h.end,"BAD_INDENT","All sequence items must start at the same column"):s(l,"MISSING_CHAR","Sequence item without - indicator");else{c=h.end,h.comment&&(a.comment=h.comment);continue}const m=u?n(t,u,h,s):e(t,h.end,f,null,h,s);t.schema.compat&&In(i.indent,u,s),l=m.range[2],a.items.push(m)}return a.range=[i.offset,l,c??l],a}function Pt(n,e,t,i){let s="";if(n){let o=!1,r="";for(const a of n){const{source:l,type:c}=a;switch(c){case"space":o=!0;break;case"comment":{t&&!o&&i(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=l.substring(1)||" ";s?s+=r+f:s=f,r="";break}case"newline":s&&(r+=l),o=!0;break;default:i(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:s,offset:e}}const gn="Block collections are not allowed within flow collections",pn=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Ho({composeNode:n,composeEmptyNode:e},t,i,s,o){var g;const r=i.start.source==="{",a=r?"flow map":"flow sequence",l=(o==null?void 0:o.nodeClass)??(r?Ne:Je),c=new l(t.schema);c.flow=!0;const f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let u=i.offset+i.start.source.length;for(let y=0;y<i.items.length;++y){const v=i.items[y],{start:E,key:S,sep:T,value:A}=v,w=dt(E,{flow:a,indicator:"explicit-key-ind",next:S??(T==null?void 0:T[0]),offset:u,onError:s,parentIndent:i.indent,startOnNewline:!1});if(!w.found){if(!w.anchor&&!w.tag&&!T&&!A){y===0&&w.comma?s(w.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):y<i.items.length-1&&s(w.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),w.comment&&(c.comment?c.comment+=`
`+w.comment:c.comment=w.comment),u=w.end;continue}!r&&t.options.strict&&Lt(S)&&s(S,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(y===0)w.comma&&s(w.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(w.comma||s(w.start,"MISSING_CHAR",`Missing , between ${a} items`),w.comment){let b="";e:for(const I of E)switch(I.type){case"comma":case"space":break;case"comment":b=I.source.substring(1);break e;default:break e}if(b){let I=c.items[c.items.length-1];ne(I)&&(I=I.value??I.key),I.comment?I.comment+=`
`+b:I.comment=b,w.comment=w.comment.substring(b.length+1)}}if(!r&&!T&&!w.found){const b=A?n(t,A,w,s):e(t,w.end,T,null,w,s);c.items.push(b),u=b.range[2],pn(A)&&s(b.range,"BLOCK_IN_FLOW",gn)}else{t.atKey=!0;const b=w.end,I=S?n(t,S,w,s):e(t,b,E,null,w,s);pn(S)&&s(I.range,"BLOCK_IN_FLOW",gn),t.atKey=!1;const U=dt(T??[],{flow:a,indicator:"map-value-ind",next:A,offset:I.range[2],onError:s,parentIndent:i.indent,startOnNewline:!1});if(U.found){if(!r&&!w.found&&t.options.strict){if(T)for(const W of T){if(W===U.found)break;if(W.type==="newline"){s(W,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}w.start<U.found.offset-1024&&s(U.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else A&&("source"in A&&((g=A.source)==null?void 0:g[0])===":"?s(A,"MISSING_CHAR",`Missing space after : in ${a}`):s(U.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const R=A?n(t,A,U,s):U.found?e(t,U.end,T,null,U,s):null;R?pn(A)&&s(R.range,"BLOCK_IN_FLOW",gn):U.comment&&(I.comment?I.comment+=`
`+U.comment:I.comment=U.comment);const K=new pe(I,R);if(t.options.keepSourceTokens&&(K.srcToken=v),r){const W=c;cs(t,W.items,I)&&s(b,"DUPLICATE_KEY","Map keys must be unique"),W.items.push(K)}else{const W=new Ne(t.schema);W.flow=!0,W.items.push(K);const Q=(R??I).range;W.range=[I.range[0],Q[1],Q[2]],c.items.push(W)}u=R?R.range[2]:U.end}}const h=r?"}":"]",[m,..._]=i.end;let d=u;if((m==null?void 0:m.source)===h)d=m.offset+m.source.length;else{const y=a[0].toUpperCase()+a.substring(1),v=f?`${y} must end with a ${h}`:`${y} in block collection must be sufficiently indented and end with a ${h}`;s(u,f?"MISSING_CHAR":"BAD_INDENT",v),m&&m.source.length!==1&&_.unshift(m)}if(_.length>0){const y=Pt(_,d,t.options.strict,s);y.comment&&(c.comment?c.comment+=`
`+y.comment:c.comment=y.comment),c.range=[i.offset,d,y.offset]}else c.range=[i.offset,d,d];return c}function _n(n,e,t,i,s,o){const r=t.type==="block-map"?Go(n,e,t,i,o):t.type==="block-seq"?Yo(n,e,t,i,o):Ho(n,e,t,i,o),a=r.constructor;return s==="!"||s===a.tagName?(r.tag=a.tagName,r):(s&&(r.tag=s),r)}function Jo(n,e,t,i,s){var h;const o=i.tag,r=o?e.directives.tagName(o.source,m=>s(o,"TAG_RESOLVE_FAILED",m)):null;if(t.type==="block-seq"){const{anchor:m,newlineAfterProp:_}=i,d=m&&o?m.offset>o.offset?m:o:m??o;d&&(!_||_.offset<d.offset)&&s(d,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!o||!r||r==="!"||r===Ne.tagName&&a==="map"||r===Je.tagName&&a==="seq")return _n(n,e,t,s,r);let l=e.schema.tags.find(m=>m.tag===r&&m.collection===a);if(!l){const m=e.schema.knownTags[r];if((m==null?void 0:m.collection)===a)e.schema.tags.push(Object.assign({},m,{default:!1})),l=m;else return m?s(o,"BAD_COLLECTION_TYPE",`${m.tag} used for ${a} collection, but expects ${m.collection??"scalar"}`,!0):s(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),_n(n,e,t,s,r)}const c=_n(n,e,t,s,r,l),f=((h=l.resolve)==null?void 0:h.call(l,c,m=>s(o,"TAG_RESOLVE_FAILED",m),e.options))??c,u=te(f)?f:new D(f);return u.range=c.range,u.tag=r,l!=null&&l.format&&(u.format=l.format),u}function zo(n,e,t){const i=e.offset,s=Wo(e,n.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[i,i,i]};const o=s.mode===">"?D.BLOCK_FOLDED:D.BLOCK_LITERAL,r=e.source?Qo(e.source):[];let a=r.length;for(let d=r.length-1;d>=0;--d){const g=r[d][1];if(g===""||g==="\r")a=d;else break}if(a===0){const d=s.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let g=i+s.length;return e.source&&(g+=e.source.length),{value:d,type:o,comment:s.comment,range:[i,g,g]}}let l=e.indent+s.indent,c=e.offset+s.length,f=0;for(let d=0;d<a;++d){const[g,y]=r[d];if(y===""||y==="\r")s.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&t(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(l=g.length),f=d,l===0&&!n.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+y.length+1}for(let d=r.length-1;d>=a;--d)r[d][0].length>l&&(a=d+1);let u="",h="",m=!1;for(let d=0;d<f;++d)u+=r[d][0].slice(l)+`
`;for(let d=f;d<a;++d){let[g,y]=r[d];c+=g.length+y.length+1;const v=y[y.length-1]==="\r";if(v&&(y=y.slice(0,-1)),y&&g.length<l){const S=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(c-y.length-(v?2:1),"BAD_INDENT",S),g=""}o===D.BLOCK_LITERAL?(u+=h+g.slice(l)+y,h=`
`):g.length>l||y[0]==="	"?(h===" "?h=`
`:!m&&h===`
`&&(h=`

`),u+=h+g.slice(l)+y,h=`
`,m=!0):y===""?h===`
`?u+=`
`:h=`
`:(u+=h+y,h=" ",m=!1)}switch(s.chomp){case"-":break;case"+":for(let d=a;d<r.length;++d)u+=`
`+r[d][0].slice(l);u[u.length-1]!==`
`&&(u+=`
`);break;default:u+=`
`}const _=i+s.length+e.source.length;return{value:u,type:o,comment:s.comment,range:[i,_,_]}}function Wo({offset:n,props:e},t,i){if(e[0].type!=="block-scalar-header")return i(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],o=s[0];let r=0,a="",l=-1;for(let h=1;h<s.length;++h){const m=s[h];if(!a&&(m==="-"||m==="+"))a=m;else{const _=Number(m);!r&&_?r=_:l===-1&&(l=n+h)}}l!==-1&&i(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,f="",u=s.length;for(let h=1;h<e.length;++h){const m=e[h];switch(m.type){case"space":c=!0;case"newline":u+=m.source.length;break;case"comment":t&&!c&&i(m,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),u+=m.source.length,f=m.source.substring(1);break;case"error":i(m,"UNEXPECTED_TOKEN",m.message),u+=m.source.length;break;default:{const _=`Unexpected token in block scalar header: ${m.type}`;i(m,"UNEXPECTED_TOKEN",_);const d=m.source;d&&typeof d=="string"&&(u+=d.length)}}}return{mode:o,indent:r,chomp:a,comment:f,length:u}}function Qo(n){const e=n.split(/\n( *)/),t=e[0],i=t.match(/^( *)/),o=[i!=null&&i[1]?[i[1],t.slice(i[1].length)]:["",t]];for(let r=1;r<e.length;r+=2)o.push([e[r],e[r+1]]);return o}function Xo(n,e,t){const{offset:i,type:s,source:o,end:r}=n;let a,l;const c=(h,m,_)=>t(i+h,m,_);switch(s){case"scalar":a=D.PLAIN,l=Zo(o,c);break;case"single-quoted-scalar":a=D.QUOTE_SINGLE,l=er(o,c);break;case"double-quoted-scalar":a=D.QUOTE_DOUBLE,l=tr(o,c);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[i,i+o.length,i+o.length]}}const f=i+o.length,u=Pt(r,f,e,t);return{value:l,type:a,comment:u.comment,range:[i,f,u.offset]}}function Zo(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),us(n)}function er(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),us(n.slice(1,-1)).replace(/''/g,"'")}function us(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let i=e.exec(n);if(!i)return n;let s=i[1],o=" ",r=e.lastIndex;for(t.lastIndex=r;i=t.exec(n);)i[1]===""?o===`
`?s+=o:o=`
`:(s+=o+i[1],o=" "),r=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=r,i=a.exec(n),s+o+((i==null?void 0:i[1])??"")}function tr(n,e){let t="";for(let i=1;i<n.length-1;++i){const s=n[i];if(!(s==="\r"&&n[i+1]===`
`))if(s===`
`){const{fold:o,offset:r}=nr(n,i);t+=o,i=r}else if(s==="\\"){let o=n[++i];const r=ir[o];if(r)t+=r;else if(o===`
`)for(o=n[i+1];o===" "||o==="	";)o=n[++i+1];else if(o==="\r"&&n[i+1]===`
`)for(o=n[++i+1];o===" "||o==="	";)o=n[++i+1];else if(o==="x"||o==="u"||o==="U"){const a={x:2,u:4,U:8}[o];t+=sr(n,i+1,a,e),i+=a}else{const a=n.substr(i-1,2);e(i-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const o=i;let r=n[i+1];for(;r===" "||r==="	";)r=n[++i+1];r!==`
`&&!(r==="\r"&&n[i+2]===`
`)&&(t+=i>o?n.slice(o,i+1):s)}else t+=s}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function nr(n,e){let t="",i=n[e+1];for(;(i===" "||i==="	"||i===`
`||i==="\r")&&!(i==="\r"&&n[e+2]!==`
`);)i===`
`&&(t+=`
`),e+=1,i=n[e+1];return t||(t=" "),{fold:t,offset:e}}const ir={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function sr(n,e,t,i){const s=n.substr(e,t),r=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(r)){const a=n.substr(e-2,t+2);return i(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(r)}function fs(n,e,t,i){const{value:s,type:o,comment:r,range:a}=e.type==="block-scalar"?zo(n,e,i):Xo(e,n.options.strict,i),l=t?n.directives.tagName(t.source,u=>i(t,"TAG_RESOLVE_FAILED",u)):null;let c;n.options.stringKeys&&n.atKey?c=n.schema[$e]:l?c=or(n.schema,s,l,t,i):e.type==="scalar"?c=rr(n,s,e,i):c=n.schema[$e];let f;try{const u=c.resolve(s,h=>i(t??e,"TAG_RESOLVE_FAILED",h),n.options);f=x(u)?u:new D(u)}catch(u){const h=u instanceof Error?u.message:String(u);i(t??e,"TAG_RESOLVE_FAILED",h),f=new D(s)}return f.range=a,f.source=s,o&&(f.type=o),l&&(f.tag=l),c.format&&(f.format=c.format),r&&(f.comment=r),f}function or(n,e,t,i,s){var a;if(t==="!")return n[$e];const o=[];for(const l of n.tags)if(!l.collection&&l.tag===t)if(l.default&&l.test)o.push(l);else return l;for(const l of o)if((a=l.test)!=null&&a.test(e))return l;const r=n.knownTags[t];return r&&!r.collection?(n.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(s(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[$e])}function rr({atKey:n,directives:e,schema:t},i,s,o){const r=t.tags.find(a=>{var l;return(a.default===!0||n&&a.default==="key")&&((l=a.test)==null?void 0:l.test(i))})||t[$e];if(t.compat){const a=t.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(i))})??t[$e];if(r.tag!==a.tag){const l=e.tagString(r.tag),c=e.tagString(a.tag),f=`Value may be parsed as either ${l} or ${c}`;o(s,"TAG_RESOLVE_FAILED",f,!0)}}return r}function ar(n,e,t){if(e){t??(t=e.length);for(let i=t-1;i>=0;--i){let s=e[i];switch(s.type){case"space":case"comment":case"newline":n-=s.source.length;continue}for(s=e[++i];(s==null?void 0:s.type)==="space";)n+=s.source.length,s=e[++i];break}}return n}const lr={composeNode:hs,composeEmptyNode:jn};function hs(n,e,t,i){const s=n.atKey,{spaceBefore:o,comment:r,anchor:a,tag:l}=t;let c,f=!0;switch(e.type){case"alias":c=cr(n,e,i),(a||l)&&i(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=fs(n,e,l,i),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=Jo(lr,n,e,t,i),a&&(c.anchor=a.source.substring(1));break;default:{const u=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;i(e,"UNEXPECTED_TOKEN",u),c=jn(n,e.offset,void 0,null,t,i),f=!1}}return a&&c.anchor===""&&i(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&n.options.stringKeys&&(!x(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&i(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(c.spaceBefore=!0),r&&(e.type==="scalar"&&e.source===""?c.comment=r:c.commentBefore=r),n.options.keepSourceTokens&&f&&(c.srcToken=e),c}function jn(n,e,t,i,{spaceBefore:s,comment:o,anchor:r,tag:a,end:l},c){const f={type:"scalar",offset:ar(e,t,i),indent:-1,source:""},u=fs(n,f,a,c);return r&&(u.anchor=r.source.substring(1),u.anchor===""&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(u.spaceBefore=!0),o&&(u.comment=o,u.range[2]=l),u}function cr({options:n},{offset:e,source:t,end:i},s){const o=new Ln(t.substring(1));o.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=e+t.length,a=Pt(i,r,n.strict,s);return o.range=[e,r,a.offset],a.comment&&(o.comment=a.comment),o}function ur(n,e,{offset:t,start:i,value:s,end:o},r){const a=Object.assign({_directives:e},n),l=new un(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},f=dt(i,{indicator:"doc-start",next:s??(o==null?void 0:o[0]),offset:t,onError:r,parentIndent:0,startOnNewline:!0});f.found&&(l.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!f.hasNewline&&r(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?hs(c,s,f,r):jn(c,f.end,i,null,f,r);const u=l.contents.range[2],h=Pt(o,u,!1,r);return h.comment&&(l.comment=h.comment),l.range=[t,u,h.offset],l}function vt(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function si(n){var s;let e="",t=!1,i=!1;for(let o=0;o<n.length;++o){const r=n[o];switch(r[0]){case"#":e+=(e===""?"":i?`

`:`
`)+(r.substring(1)||" "),t=!0,i=!1;break;case"%":((s=n[o+1])==null?void 0:s[0])!=="#"&&(o+=1),t=!1;break;default:t||(i=!0),t=!1}}return{comment:e,afterEmptyLine:i}}class fr{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,i,s,o)=>{const r=vt(t);o?this.warnings.push(new xo(r,i,s)):this.errors.push(new St(r,i,s))},this.directives=new ge({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:s}=si(this.prelude);if(i){const o=e.contents;if(t)e.comment=e.comment?`${e.comment}
${i}`:i;else if(s||e.directives.docStart||!o)e.commentBefore=i;else if(ee(o)&&!o.flow&&o.items.length>0){let r=o.items[0];ne(r)&&(r=r.key);const a=r.commentBefore;r.commentBefore=a?`${i}
${a}`:i}else{const r=o.commentBefore;o.commentBefore=r?`${i}
${r}`:i}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:si(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const s of e)yield*this.next(s);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,s)=>{const o=vt(e);o[0]+=t,this.onError(o,"BAD_DIRECTIVE",i,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=ur(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new St(vt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new St(vt(e),"UNEXPECTED_TOKEN",i));break}this.doc.directives.docEnd=!0;const t=Pt(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new St(vt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const i=Object.assign({_directives:this.directives},this.options),s=new un(void 0,i);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}const ds="\uFEFF",ms="",gs="",On="";function hr(n){switch(n){case ds:return"byte-order-mark";case ms:return"doc-mode";case gs:return"flow-error-end";case On:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function Ae(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const oi=new Set("0123456789ABCDEFabcdef"),dr=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Kt=new Set(",[]{}"),mr=new Set(` ,[]{}
\r	`),yn=n=>!n||mr.has(n);class gr{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;t===" ";)t=this.buffer[++i+e];if(t==="\r"){const s=this.buffer[i+e+1];if(s===`
`||!s&&!this.atEnd)return e+i+1}return t===`
`||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if(t==="-"||t==="."){const i=this.buffer.substr(e,3);if((i==="---"||i==="...")&&Ae(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===ds&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,i=e.indexOf("#");for(;i!==-1;){const o=e[i-1];if(o===" "||o==="	"){t=i-1;break}else i=e.indexOf("#",i+1)}for(;;){const o=e[t-1];if(o===" "||o==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield ms,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Ae(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Ae(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Ae(t)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(yn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext&&s[0]!=="#"||i===0&&(s.startsWith("---")||s.startsWith("..."))&&Ae(s[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield gs,yield*this.parseLineStart();let o=0;for(;s[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),s[o]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(yn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||Ae(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let o=0;for(;this.buffer[t-1-o]==="\\";)o+=1;if(o%2===0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let s=i.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const o=this.continueScalar(s+1);if(o===-1)break;s=i.indexOf(`
`,o)}s!==-1&&(t=s-(i[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Ae(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,i;e:for(let o=this.pos;i=this.buffer[o];++o)switch(i){case" ":t+=1;break;case`
`:e=o,t=0;break;case"\r":{const r=this.buffer[o+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!i&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(e+1);if(o===-1)break;e=this.buffer.indexOf(`
`,o)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(i=this.buffer[s];i===" ";)i=this.buffer[++s];if(i==="	"){for(;i==="	"||i===" "||i==="\r"||i===`
`;)i=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let o=e-1,r=this.buffer[o];r==="\r"&&(r=this.buffer[--o]);const a=o;for(;r===" ";)r=this.buffer[--o];if(r===`
`&&o>=this.pos&&o+1+t>a)e=o;else break}while(!0);return yield On,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,i=this.pos-1,s;for(;s=this.buffer[++i];)if(s===":"){const o=this.buffer[i+1];if(Ae(o)||e&&Kt.has(o))break;t=i}else if(Ae(s)){let o=this.buffer[i+1];if(s==="\r"&&(o===`
`?(i+=1,s=`
`,o=this.buffer[i+1]):t=i),o==="#"||e&&Kt.has(o))break;if(s===`
`){const r=this.continueScalar(i+1);if(r===-1)break;i=Math.max(i,r-2)}}else{if(e&&Kt.has(s))break;t=i}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield On,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(yn))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(Ae(t)||e&&Kt.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Ae(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(dr.has(t))t=this.buffer[++e];else if(t==="%"&&oi.has(this.buffer[e+1])&&oi.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,i;do i=this.buffer[++t];while(i===" "||e&&i==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class pr{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const o=t+i>>1;this.lineStarts[o]<e?t=o+1:i=o}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Be(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function ri(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function ps(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function jt(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Ze(n){var t;if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function ai(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Be(e.start,"explicit-key-ind")&&!Be(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,ps(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class _r{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new gr,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=hr(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const i=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const i=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in i?i.indent:0:t.type==="flow-collection"&&i.type==="document"&&(t.indent=0),t.type==="flow-collection"&&ai(t),i.type){case"document":i.value=t;break;case"block-scalar":i.props.push(t);break;case"block-map":{const s=i.items[i.items.length-1];if(s.value){i.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=i.items[i.items.length-1];s.value?i.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=i.items[i.items.length-1];!s||s.value?i.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((i.type==="document"||i.type==="block-map"||i.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&ri(s.start)===-1&&(t.indent===0||s.start.every(o=>o.type!=="comment"||o.indent<t.indent))&&(i.type==="document"?i.end=s.start:i.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{ri(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=jt(this.peek(2)),i=Ze(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var i;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,o=Array.isArray(s)?s[s.length-1]:void 0;(o==null?void 0:o.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],o=(i=s==null?void 0:s.value)==null?void 0:i.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,o=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(o&&t.sep&&!t.value){const a=[];for(let l=0;l<t.sep.length;++l){const c=t.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":o||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):o||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Be(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(ps(t.key)&&!Be(t.sep,"newline")){const a=Ze(t.start),l=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(Be(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Ze(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||o?e.items.push({start:r,key:null,sep:[this.sourceToken]}):Be(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);o||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Be(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:r});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var i;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,o=Array.isArray(s)?s[s.length-1]:void 0;(o==null?void 0:o.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],o=(i=s==null?void 0:s.value)==null?void 0:i.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Be(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while((i==null?void 0:i.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type==="block-map"&&(this.type==="map-value-ind"&&i.indent===e.indent||this.type==="newline"&&!i.items[i.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const s=jt(i),o=Ze(s);ai(e);const r=e.end.splice(1,e.end.length);r.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:o,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=jt(e),i=Ze(t);return i.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=jt(e),i=Ze(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(i=>i.type==="newline"||i.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function yr(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new pr||null,prettyErrors:e}}function br(n,e={}){const{lineCounter:t,prettyErrors:i}=yr(e),s=new _r(t==null?void 0:t.addNewLine),o=new fr(e);let r=null;for(const a of o.compose(s.parse(n),!0,n.length))if(!r)r=a;else if(r.options.logLevel!=="silent"){r.errors.push(new St(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return i&&t&&(r.errors.forEach(ni(n,t)),r.warnings.forEach(ni(n,t))),r}function wr(n,e,t){let i;const s=br(n,t);if(!s)return null;if(s.warnings.forEach(o=>Vi(s.options.logLevel,o)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:i},t))}function Pe(n,e){try{const t=wr(n);if(t==null)throw new Error("YAML file is empty or invalid");return{value:t,source:e}}catch(t){const i=t instanceof Error?t.message:"Unknown YAML parse error";throw new Error(`YAML parse error in ${e}: ${i}`)}}function vr(){const n=Object.assign({"/src/games/boiler_7/game.yaml":Rs,"/src/games/boiler_7/items.yaml":Ps,"/src/games/boiler_7/localization/en.yaml":Bs,"/src/games/boiler_7/rules.yaml":Fs,"/src/games/boiler_7/scenes/arrival.yaml":Us,"/src/games/boiler_7/scenes/boiler_floor.yaml":Ks,"/src/games/boiler_7/scenes/conclusion.yaml":js,"/src/games/boiler_7/scenes/control_room.yaml":Vs,"/src/games/boiler_7/scenes/lower_chamber.yaml":xs,"/src/games/boiler_7/state.yaml":Gs,"/src/games/midnight_switchboard/game.yaml":Ys,"/src/games/midnight_switchboard/items.yaml":Hs,"/src/games/midnight_switchboard/localization/en.yaml":Js,"/src/games/midnight_switchboard/rules.yaml":zs,"/src/games/midnight_switchboard/scenes/basement_chamber.yaml":Ws,"/src/games/midnight_switchboard/scenes/basement_stairs.yaml":Qs,"/src/games/midnight_switchboard/scenes/ending.yaml":Xs,"/src/games/midnight_switchboard/scenes/operator_line.yaml":Zs,"/src/games/midnight_switchboard/scenes/prologue.yaml":eo,"/src/games/midnight_switchboard/scenes/records_room.yaml":to,"/src/games/midnight_switchboard/scenes/switchboard_room.yaml":no,"/src/games/midnight_switchboard/state.yaml":io,"/src/games/steelclad_skies/game.yaml":so,"/src/games/steelclad_skies/items.yaml":oo,"/src/games/steelclad_skies/localization/en.yaml":ro,"/src/games/steelclad_skies/rules.yaml":ao,"/src/games/steelclad_skies/scenes/prologue_awake.yaml":lo,"/src/games/steelclad_skies/state.yaml":co}),e={};for(const[t,i]of Object.entries(n)){const s=t.split("/src/games/")[1].split("/"),o=s[0],r=s.slice(1).join("/");e[o]||(e[o]={id:o,title:o,raw:{game:"",rules:"",state:"",items:"",scenes:{},localization:{}}});const a=e[o];if(r==="game.yaml"){a.raw.game=i;try{const l=Pe(i,"game.yaml").value;a.title=l.game.title}catch{}}else if(r==="rules.yaml")a.raw.rules=i;else if(r==="state.yaml")a.raw.state=i;else if(r==="items.yaml")a.raw.items=i;else if(r.startsWith("scenes/")){const l=r.replace("scenes/","");a.raw.scenes[l]=i}else if(r.startsWith("localization/")){const l=r.replace("localization/","");a.raw.localization[l]=i}}return e}class k extends Error{constructor(t,i,s){super(i);ue(this,"code");ue(this,"file");ue(this,"path");this.code=t,this.file=s==null?void 0:s.file,this.path=s==null?void 0:s.path}toString(){let t=`[${this.code}] ${this.message}`;return this.file&&(t+=`
File: ${this.file}`),this.path&&(t+=`
Path: ${this.path}`),t}}function kr(n){Er(n),Nr(n),Ir(n),Or(n),Tr(n),Cr(n)}function Zt(n,e){const t=Object.keys(n);if(t.length!==1)throw new k("E_CONDITION_INVALID",`Condition must contain exactly one operator at ${e}`);const i=t[0],s=n[i];if(i==="all"||i==="any"){if(!Array.isArray(s)||s.length===0)throw new k("E_CONDITION_INVALID",`"${i}" must be a non-empty array at ${e}`);s.forEach((o,r)=>Zt(o,`${e}.${i}[${r}]`));return}if(i==="not"){if(!s)throw new k("E_CONDITION_INVALID",`"not" condition missing value at ${e}`);Zt(s,`${e}.not`);return}if(i==="eq"||i==="neq"||i==="gt"||i==="gte"||i==="lt"||i==="lte"){if(typeof s!="object"||s===null||typeof s.var!="string"||!("value"in s))throw new k("E_CONDITION_INVALID",`Invalid payload for operator "${i}" at ${e}`);return}if(typeof s!="object"||s===null)throw new k("E_CONDITION_INVALID",`Invalid payload for operator "${i}" at ${e}`)}function Sr(n,e,t){n&&n.forEach((i,s)=>{const o=Object.keys(i);if(o.length!==1)throw new k("E_EFFECT_INVALID",`Effect must contain exactly one operator at ${e}[${s}]`);const r=o[0],a=i[r];if(r==="set"&&!a.var)throw new k("E_EFFECT_INVALID",`Set effect missing var at ${e}[${s}]`);if(r==="add"){if(!a.var)throw new k("E_EFFECT_INVALID",`Add effect missing var at ${e}[${s}]`);if(typeof a.value=="object"&&"random"in a.value&&!/^\d+\/\d+$/.test(a.value.random))throw new k("E_EFFECT_INVALID",`Invalid random format at ${e}[${s}]`)}if(r==="add_item"||r==="remove_item"){if(!a||typeof a.id!="string")throw new k("E_EFFECT_INVALID",`${r} requires { id: string } at ${e}[${s}]`);if(!t.items.items[a.id])throw new k("E_REF_NOT_FOUND",`Unknown item "${a.id}" at ${e}[${s}]`,{file:"items.yaml",path:`items.${a.id}`})}})}function Er(n){const e=n.manifest.game;if(!e.id||!e.title||!e.version)throw new k("E_SCHEMA_MISSING_FIELD","Missing required game metadata fields",{file:"game.yaml"})}function Nr(n){if(!n.rules.rules.systems)throw new k("E_SCHEMA_MISSING_FIELD","rules.systems is required",{file:"rules.yaml"})}function Ir(n){const e=n.state.state.variables,t=n.rules.rules.systems;for(const[i,s]of Object.entries(e)){if(s.requires&&!t[s.requires])throw new k("E_SYSTEM_DISABLED_USAGE",`State variable "${i}" requires disabled system "${s.requires}"`,{file:"state.yaml",path:`state.variables.${i}`});if(typeof s.initial!==s.type)throw new k("E_STATE_TYPE_MISMATCH",`Initial value of "${i}" does not match declared type "${s.type}"`,{file:"state.yaml",path:`state.variables.${i}.initial`})}}function Or(n){const e=n.items.items;for(const[t,i]of Object.entries(e))if(!i.name)throw new k("E_SCHEMA_MISSING_FIELD",`Item "${t}" missing name`,{file:"items.yaml",path:`items.${t}.name`})}function Tr(n){const e=new Set;for(const[t,i]of Object.entries(n.scenes)){const s=i.scene;if(e.has(s.id))throw new k("E_DUPLICATE_ID",`Duplicate scene id "${s.id}"`,{file:`scenes/${t}`,path:"scene.id"});e.add(s.id),Ar(i,t,n)}}function Ar(n,e,t){const i=new Set;for(const s of n.scene.nodes){if(i.has(s.id))throw new k("E_DUPLICATE_ID",`Duplicate node id "${s.id}" in scene "${n.scene.id}"`,{file:`scenes/${e}`,path:"scene.nodes[].id"});i.add(s.id),s.text.forEach((o,r)=>{typeof o!="string"&&"if"in o&&Zt(o.if,`scene.${n.scene.id}.node.${s.id}.text[${r}].if`)}),Lr(s,n.scene.id,e,t)}}function Lr(n,e,t,i){for(const s of n.choices){if(!s.goto)throw new k("E_SCHEMA_MISSING_FIELD",`Choice "${s.id}" is missing goto`,{file:`scenes/${t}`,path:`node.${n.id}.choices.${s.id}`});s.if&&Zt(s.if,`scene.${e}.node.${n.id}.choice.${s.id}.if`),Sr(s.effects,`scene.${e}.node.${n.id}.choice.${s.id}.effects`,i)}}function Cr(n){const{scene:e,node:t}=n.manifest.game.start,i=Object.values(n.scenes).find(o=>o.scene.id===e);if(!i)throw new k("E_REF_NOT_FOUND_SCENE",`Start scene "${e}" not found`,{file:"game.yaml",path:"game.start.scene"});if(!i.scene.nodes.find(o=>o.id===t))throw new k("E_REF_NOT_FOUND_NODE",`Start node "${t}" not found in scene "${e}"`,{file:"game.yaml",path:"game.start.node"})}function $r(n){return{manifest:n.manifest.game,rules:n.rules.rules,state:Dr(n),items:qr(n),scenes:Mr(n),localization:n.localization,language:"en"}}function Dr(n){const e=n.rules.rules.state_visibility.default==="visible",t=new Map;for(const[i,s]of Object.entries(n.state.state.variables))t.set(i,{type:s.type,value:s.initial,visible:s.visible!==void 0?s.visible:e});return{variables:t}}function qr(n){const e=new Map;for(const[t,i]of Object.entries(n.items.items))e.set(t,i);return e}function Mr(n){const e=new Map;for(const t of Object.values(n.scenes)){const i=t.scene.id;e.set(i,{id:i,nodes:Rr(t)})}return e}function Rr(n){const e=new Map;for(const t of n.scene.nodes)e.set(t.id,{id:t.id,text:t.text,choices:t.choices});return e}class Pr{constructor(e){ue(this,"_at");ue(this,"_state");ue(this,"_history",[]);ue(this,"_rng");ue(this,"_inventory",new Set);const t=e.manifest.start;this._at={scene:t.scene,node:t.node},this._state=Br(e.state)}get at(){return this._at}get history(){return this._history}get rng(){return this._rng}get inventory(){return this._inventory}getVar(e){const t=this._state.variables.get(e);if(!t)throw new k("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});return t.value}setVar(e,t){const i=this._state.variables.get(e);if(!i)throw new k("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});i.value=t}getVisibleState(){const e={};for(const[t,i]of this._state.variables.entries())i.visible&&(e[t]=i.value);return e}move(e,t,i){this._at=e,this._history.push({from:i,to:e,choiceId:t,ts:Date.now()})}save(){const e={};for(const[t,i]of this._state.variables.entries())e[t]=i.value;return{version:"0.1",at:{...this._at},state:e,history:[...this._history],rng:this._rng?{...this._rng}:void 0,inventory:[...this._inventory]}}load(e){if(e.version!=="0.1")throw new k("E_SCHEMA_INVALID_TYPE",`Unsupported save version "${e.version}"`);this._at={...e.at},this._history=[...e.history];for(const[t,i]of Object.entries(e.state)){const s=this._state.variables.get(t);if(!s)throw new k("E_STATE_VAR_UNDECLARED",`Save contains unknown var "${t}"`);s.value=i}e.rng&&(this._rng={...e.rng}),e.inventory&&(this._inventory=new Set(e.inventory))}initializeRng(e){this._rng||(this._rng={seed:e,counter:0})}addItem(e){this._inventory.add(e)}removeItem(e){this._inventory.delete(e)}hasItem(e){return this._inventory.has(e)}}function Br(n){const e=new Map(n.variables);for(const[t,i]of e.entries())e.set(t,{...i});return{variables:e}}function He(n,e,t,i){return Kr(n)?Ur(n,e,t,i):Fr(n,e,t,i)}function Fr(n,e,t,i){const s=Object.keys(n);if(s.length!==1)throw new k("E_CONDITION_INVALID","Operator condition must contain exactly one operator");const o=s[0],r=n[o],a=i.findConditionHandler(o);if(!a)throw new k("E_CONDITION_INVALID",`Unknown condition operator "${o}"`);try{return a(r,e,t)}catch(l){throw l instanceof k?l:new k("E_CONDITION_INVALID",`Condition operator "${o}" threw an error`)}}function Ur(n,e,t,i){if(n.all){if(!Array.isArray(n.all)||n.all.length===0)throw new k("E_CONDITION_INVALID",'"all" must be a non-empty array');return n.all.every(s=>He(s,e,t,i))}if(n.any){if(!Array.isArray(n.any)||n.any.length===0)throw new k("E_CONDITION_INVALID",'"any" must be a non-empty array');return n.any.some(s=>He(s,e,t,i))}if(n.not)return!He(n.not,e,t,i);throw new k("E_CONDITION_INVALID","Empty logical condition")}function Kr(n){return typeof n=="object"&&("all"in n||"any"in n||"not"in n)}function jr(n,e,t,i){if(!(!n||n.length===0))for(const s of n){const o=Object.keys(s)[0],r=i.findEffectHandler(o);if(!r)throw new k("E_EFFECT_INVALID",`Unknown effect operator "${o}"`);r(s[o],e,t)}}function bn(n,e,t,i){const s=[];for(const o of n){if(typeof o=="string"){s.push(Vt(o,e,t,i));continue}if(xr(o)){const r=li(o.key,t);s.push(Vt(r,e,t,i));continue}if("if"in o){if(He(o.if,e,t,i)){const r=o.then;if(typeof r=="string")s.push(Vt(r,e,t,i));else{const a=li(r.key,t);s.push(Vt(a,e,t,i))}}continue}throw new k("E_SCHEMA_INVALID_TYPE","Unknown text fragment structure")}return s}function li(n,e){const t=e.language,i=e.localization[t];if(!i)throw new k("E_LOCALIZATION_KEY_MISSING",`Language "${t}" not loaded`);const s=n.split(".");let o=i;for(const r of s)if(o=o==null?void 0:o[r],o===void 0)throw new k("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" not found for language "${t}"`);if(typeof o!="string")throw new k("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" does not resolve to string`);return o}function Vt(n,e,t,i){const s=/\{\{if (.*?)\}\}([\s\S]*?)\{\{\/if\}\}/g;return n=n.replace(s,(o,r,a)=>{const l=Vr(r);return He(l,e,t,i)?a:""}),n.replace(/\{\{(.*?)\}\}/g,(o,r)=>{const a=r.trim();if(a==="inventory_count")return String(e.inventory.size);if(a==="inventory_list")return e.inventory.size===0?"(none)":Array.from(e.inventory).map(c=>{const f=t.items.get(c);if(!f)throw new k("E_REF_NOT_FOUND",`Inventory contains unknown item "${c}"`);return f.name}).join(", ");if(a.startsWith("has_item:")){const l=a.slice(9).trim();if(!t.items.has(l))throw new k("E_REF_NOT_FOUND",`Interpolation references unknown item "${l}"`);return String(e.hasItem(l))}try{const l=e.getVar(a);return String(l)}catch{throw new k("E_STATE_VAR_UNDECLARED",`Interpolation variable "${a}" not declared`)}})}function Vr(n){const e=n.trim().split(/\s+/);if(e.length===0)throw new k("E_CONDITION_INVALID","Empty inline condition");const t=e[0];if(t==="has_item"){if(e.length!==2)throw new k("E_CONDITION_INVALID","has_item requires one argument");return{has_item:{id:e[1]}}}if(e.length!==3)throw new k("E_CONDITION_INVALID",`Invalid inline condition format "${n}"`);const[i,s,o]=e;let r=o;return o==="true"?r=!0:o==="false"?r=!1:isNaN(Number(o))||(r=Number(o)),{[t]:{var:s,value:r}}}function xr(n){return typeof n=="object"&&n!==null&&"key"in n}class Gr{constructor(){ue(this,"plugins",[]);ue(this,"finalized",!1)}register(e){if(this.finalized)throw new k("E_PLUGIN_REGISTRY_LOCKED","Cannot register plugins after registry is finalized");this.plugins.push(e)}finalize(){const e=new Set;for(const t of this.plugins){if(e.has(t.id))throw new k("E_PLUGIN_DUPLICATE_ID",`Duplicate plugin id "${t.id}"`);e.add(t.id)}for(const t of this.plugins)for(const i of t.dependsOn??[])if(!e.has(i))throw new k("E_PLUGIN_DEPENDENCY_MISSING",`Plugin "${t.id}" depends on missing plugin "${i}"`);this.plugins=Yr(this.plugins),this.finalized=!0}getAll(){return this.plugins}runHook(e,t,i){var s;for(const o of this.plugins){const r=(s=o.hooks)==null?void 0:s[e];r&&r(t,i)}}findConditionHandler(e){var t;for(const i of this.plugins){const s=(t=i.conditions)==null?void 0:t[e];if(s)return s}}findEffectHandler(e){var t;for(const i of this.plugins){const s=(t=i.effects)==null?void 0:t[e];if(s)return s}}}function Yr(n){var a,l;const e=new Map;for(const c of n)e.set(c.id,c);const t=new Map,i=new Map;for(const c of n)t.set(c.id,new Set),i.set(c.id,0);function s(c,f){t.get(c).has(f)||(t.get(c).add(f),i.set(f,(i.get(f)??0)+1))}for(const c of n)for(const f of c.dependsOn??[])s(f,c.id);for(const c of n){for(const f of((a=c.order)==null?void 0:a.after)??[]){if(!e.has(f))throw new k("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${c.id}" orders after unknown plugin "${f}"`);s(f,c.id)}for(const f of((l=c.order)==null?void 0:l.before)??[]){if(!e.has(f))throw new k("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${c.id}" orders before unknown plugin "${f}"`);s(c.id,f)}}const o=[];for(const c of n)(i.get(c.id)??0)===0&&o.push(c.id);const r=[];for(;o.length>0;){const c=o.shift();r.push(e.get(c));for(const f of t.get(c))i.set(f,(i.get(f)??0)-1),(i.get(f)??0)===0&&o.push(f)}if(r.length!==n.length)throw new k("E_PLUGIN_ORDER_CYCLE","Plugin ordering contains a cycle");return r}const Hr={id:"core",conditions:{eq(n,e){const{var:t,value:i}=n;return e.getVar(t)===i},neq(n,e){const{var:t,value:i}=n;return e.getVar(t)!==i},gt(n,e){return xt(n,e,(t,i)=>t>i)},gte(n,e){return xt(n,e,(t,i)=>t>=i)},lt(n,e){return xt(n,e,(t,i)=>t<i)},lte(n,e){return xt(n,e,(t,i)=>t<=i)}},effects:{add(n,e,t){if(!n||typeof n.var!="string")throw new k("E_EFFECT_INVALID","add requires { var: string, value: number | RandomValue }");const i=e.getVar(n.var);if(typeof i!="number")throw new k("E_STATE_TYPE_MISMATCH",`Cannot add to non-number variable "${n.var}"`);let s;if(typeof n.value=="number")s=n.value;else if(typeof n.value=="object"&&n.value&&"random"in n.value){if(!t.rules.systems.randomness)throw new k("E_SYSTEM_DISABLED_USAGE","Randomness system disabled");s=Jr(n.value.random,e)}else throw new k("E_EFFECT_INVALID","Invalid add value");console.log("[Core.add] applying",{var:n.var,current:i,delta:s,next:i+s,payload:n}),e.setVar(n.var,i+s)},set(n,e){const{var:t,value:i}=n,s=e.getVar(t);if(typeof s!=typeof i)throw new k("E_STATE_TYPE_MISMATCH",`Cannot set "${t}" (${typeof s}) to ${typeof i}`);e.setVar(t,i)}}};function xt(n,e,t){const{var:i,value:s}=n,o=e.getVar(i);if(typeof o!="number"||typeof s!="number")throw new k("E_CONDITION_INVALID","Numeric comparison requires numbers");return t(o,s)}function Jr(n,e){const t=e.rng;if(!t)throw console.error("[Core.add] RNG missing. Did randomness plugin initialize it?"),new k("E_EFFECT_INVALID","Randomness system enabled but RNG state missing");const i=n.split("/");if(i.length!==2)throw new k("E_EFFECT_INVALID",`Invalid random format "${n}"`);const s=Number(i[0]),o=Number(i[1]);if(!Number.isFinite(s)||!Number.isFinite(o)||o<=0)throw new k("E_EFFECT_INVALID",`Invalid random values "${n}"`);const r={seed:t.seed,counter:t.counter},a=t.seed,l=t.counter++,c=Math.abs(Math.sin(a+l)*1e4)%1,f=c<s/o?1:0;return console.log("[Core.add] resolveRandom",{randomString:n,before:r,after:{seed:t.seed,counter:t.counter},rand:c,threshold:s/o,out:f}),c<s/o?1:0}const zr={id:"randomness",order:{after:["core"]},dependsOn:["core"],hooks:{onStart(n){n.initializeRng(Date.now())}}},Wr={id:"inventory",dependsOn:["core"],order:{after:["core"]},conditions:{has_item(n,e,t){if(!n||typeof n.id!="string")throw new k("E_CONDITION_INVALID","has_item requires { id: string }");if(!t.items.has(n.id))throw new k("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);return e.hasItem(n.id)}},effects:{add_item(n,e,t){if(!n||typeof n.id!="string")throw new k("E_EFFECT_INVALID","add_item requires { id: string }");if(!t.items.has(n.id))throw new k("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.addItem(n.id)},remove_item(n,e,t){if(!n||typeof n.id!="string")throw new k("E_EFFECT_INVALID","remove_item requires { id: string }");if(!t.items.has(n.id))throw new k("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.removeItem(n.id)}}};class Qr{constructor(e){ue(this,"model");ue(this,"session");ue(this,"plugins",new Gr);this.model=e,this.session=new Pr(e),this.assertNodeExists(this.session.at),this.plugins.register(Hr),this.model.rules.systems.randomness&&this.plugins.register(zr),this.model.rules.systems.inventory&&this.plugins.register(Wr),this.plugins.finalize()}start(){return this.plugins.runHook("onStart",this.session,this.model),this.assertNodeExists(this.session.at),this.getViewModel()}getViewModel(){const e=this.session.at,t=this.getNode(e);return{gameTitle:this.model.manifest.title,sceneId:e.scene,nodeId:e.node,text:bn(t.text,this.session,this.model,this.plugins),choices:t.choices.filter(i=>!i.if||He(i.if,this.session,this.model,this.plugins)).map(i=>({id:i.id,text:this.resolveChoiceText(i.text),enabled:!0})),visibleState:this.session.getVisibleState(),inventory:Array.from(this.session.inventory).map(i=>{const s=this.model.items.get(i);if(!s)throw new k("E_REF_NOT_FOUND",`Inventory contains unknown item "${i}"`);const o=r=>{if(r)return bn([{key:r}],this.session,this.model,this.plugins)[0]};return{id:i,name:o(s.name)??s.name,description:o(s.description)??s.description}})}}resolveChoiceText(e){if(e.includes("."))try{return bn([{key:e}],this.session,this.model,this.plugins)[0]}catch{return e}return e}choose(e){const t=this.session.at,s=this.getNode(t).choices.find(r=>r.id===e);if(!s)throw new k("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" not found in node "${t.scene}.${t.node}"`);if(console.groupCollapsed(`[Engine] choose("${e}")`),console.log("From:",t),console.log("Choice:",s),console.log("State before:",this.session.getVisibleState()),this.plugins.runHook("beforeChoice",this.session,this.model),s.if&&!He(s.if,this.session,this.model,this.plugins))throw console.warn("Choice condition failed at runtime:",s.if),console.log("State at failure:",this.session.getVisibleState()),console.groupEnd(),new k("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" is not currently available`);const o={scene:s.goto.scene,node:s.goto.node};this.assertNodeExists(o);try{this.plugins.runHook("beforeTransition",this.session,this.model),console.log("Applying effects:",s.effects??[]),jr(s.effects,this.session,this.model,this.plugins),console.log("State after effects:",this.session.getVisibleState()),this.session.move(o,e,t),console.log("Moved to:",this.session.at),this.plugins.runHook("afterTransition",this.session,this.model),this.plugins.runHook("afterChoice",this.session,this.model);const r=this.getViewModel();return console.log("VM:",{sceneId:r.sceneId,nodeId:r.nodeId,choices:r.choices.map(a=>a.id)}),console.groupEnd(),r}catch(r){throw console.error("[Engine] choose crashed:",r),console.log("State at crash:",this.session.getVisibleState()),console.log("At crash nodeRef:",this.session.at),console.groupEnd(),r}}save(){return this.session.save()}load(e){return this.session.load(e),this.assertNodeExists(this.session.at),this.getViewModel()}getNode(e){const t=this.model.scenes.get(e.scene);if(!t)throw new k("E_REF_NOT_FOUND_SCENE",`Scene "${e.scene}" not found`);const i=t.nodes.get(e.node);if(!i)throw new k("E_REF_NOT_FOUND_NODE",`Node "${e.node}" not found in scene "${e.scene}"`);return i}assertNodeExists(e){this.getNode(e)}getCurrentNodeRef(){return this.session.at}getFullState(){return this.session.save().state}getHistory(){return this.session.history}getAllScenes(){return this.model.scenes}getInventory(){return Array.from(this.session.inventory).map(e=>{const t=this.model.items.get(e);return{id:e,name:t.name,description:t.description}})}}const et=[];function Xr(n,e=z){let t;const i=new Set;function s(a){if(mt(n,a)&&(n=a,t)){const l=!et.length;for(const c of i)c[1](),et.push(c,n);if(l){for(let c=0;c<et.length;c+=2)et[c][0](et[c+1]);et.length=0}}}function o(a){s(a(n))}function r(a,l=z){const c=[a,l];return i.add(c),i.size===1&&(t=e(s,o)||z),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:o,subscribe:r}}const Ce=Xr({engine:null,viewModel:null});function ci(n,e,t){const i=n.slice();return i[4]=e[t][0],i[5]=e[t][1],i}function ui(n,e,t){const i=n.slice();return i[8]=e[t],i}function fi(n){var he,le;let e,t,i,s,o,r,a,l=((he=n[1].viewModel)==null?void 0:he.sceneId)+"",c,f,u=((le=n[1].viewModel)==null?void 0:le.nodeId)+"",h,m,_,d,g,y,v,E=JSON.stringify(n[1].engine.getFullState(),null,2)+"",S,T,A,w,b,I,U,R=JSON.stringify(n[1].engine.getInventory(),null,2)+"",K,W,Q,_e,fe,re,G,P=JSON.stringify(n[1].engine.getHistory(),null,2)+"",ie,V,C,q,$,ye,be=Ie(Array.from(n[1].engine.getAllScenes().entries())),X=[];for(let j=0;j<be.length;j+=1)X[j]=di(ci(n,be,j));return{c(){e=N("div"),t=N("h3"),t.textContent="DEBUG PANEL",i=B(),s=N("section"),o=N("strong"),o.textContent="Current Node:",r=B(),a=N("div"),c=L(l),f=L(`.
        `),h=L(u),m=B(),_=N("section"),d=N("strong"),d.textContent="State:",g=B(),y=N("pre"),v=L(""),S=L(E),T=L(`
      `),A=B(),w=N("section"),b=N("strong"),b.textContent="Inventory:",I=B(),U=N("pre"),K=L(R),W=B(),Q=N("section"),_e=N("strong"),_e.textContent="History:",fe=B(),re=N("pre"),G=L(""),ie=L(P),V=L(`
      `),C=B(),q=N("section"),$=N("strong"),$.textContent="Jump To:",ye=B();for(let j=0;j<X.length;j+=1)X[j].c();F(s,"class","svelte-1lq35cb"),F(_,"class","svelte-1lq35cb"),F(w,"class","svelte-1lq35cb"),F(Q,"class","svelte-1lq35cb"),F(q,"class","svelte-1lq35cb"),F(e,"class","debug svelte-1lq35cb")},m(j,ce){J(j,e,ce),p(e,t),p(e,i),p(e,s),p(s,o),p(s,r),p(s,a),p(a,c),p(a,f),p(a,h),p(e,m),p(e,_),p(_,d),p(_,g),p(_,y),p(y,v),p(y,S),p(y,T),p(e,A),p(e,w),p(w,b),p(w,I),p(w,U),p(U,K),p(e,W),p(e,Q),p(Q,_e),p(Q,fe),p(Q,re),p(re,G),p(re,ie),p(re,V),p(e,C),p(e,q),p(q,$),p(q,ye);for(let we=0;we<X.length;we+=1)X[we]&&X[we].m(q,null)},p(j,ce){var we,Ke;if(ce&2&&l!==(l=((we=j[1].viewModel)==null?void 0:we.sceneId)+"")&&H(c,l),ce&2&&u!==(u=((Ke=j[1].viewModel)==null?void 0:Ke.nodeId)+"")&&H(h,u),ce&2&&E!==(E=JSON.stringify(j[1].engine.getFullState(),null,2)+"")&&H(S,E),ce&2&&R!==(R=JSON.stringify(j[1].engine.getInventory(),null,2)+"")&&H(K,R),ce&2&&P!==(P=JSON.stringify(j[1].engine.getHistory(),null,2)+"")&&H(ie,P),ce&6){be=Ie(Array.from(j[1].engine.getAllScenes().entries()));let se;for(se=0;se<be.length;se+=1){const Me=ci(j,be,se);X[se]?X[se].p(Me,ce):(X[se]=di(Me),X[se].c(),X[se].m(q,null))}for(;se<X.length;se+=1)X[se].d(1);X.length=be.length}},d(j){j&&Y(e),Ct(X,j)}}}function hi(n){let e,t=n[8]+"",i,s,o;function r(){return n[3](n[4],n[8])}return{c(){e=N("button"),i=L(t),F(e,"class","svelte-1lq35cb")},m(a,l){J(a,e,l),p(e,i),s||(o=Ee(e,"click",r),s=!0)},p(a,l){n=a,l&2&&t!==(t=n[8]+"")&&H(i,t)},d(a){a&&Y(e),s=!1,o()}}}function di(n){let e,t,i=n[4]+"",s,o,r,a=Ie(Array.from(n[5].nodes.keys())),l=[];for(let c=0;c<a.length;c+=1)l[c]=hi(ui(n,a,c));return{c(){e=N("div"),t=N("strong"),s=L(i),o=B();for(let c=0;c<l.length;c+=1)l[c].c();r=B()},m(c,f){J(c,e,f),p(e,t),p(t,s),p(e,o);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null);p(e,r)},p(c,f){if(f&2&&i!==(i=c[4]+"")&&H(s,i),f&6){a=Ie(Array.from(c[5].nodes.keys()));let u;for(u=0;u<a.length;u+=1){const h=ui(c,a,u);l[u]?l[u].p(h,f):(l[u]=hi(h),l[u].c(),l[u].m(e,r))}for(;u<l.length;u+=1)l[u].d(1);l.length=a.length}},d(c){c&&Y(e),Ct(l,c)}}}function Zr(n){let e,t=n[0]&&n[1].engine&&fi(n);return{c(){t&&t.c(),e=Li()},m(i,s){t&&t.m(i,s),J(i,e,s)},p(i,[s]){i[0]&&i[1].engine?t?t.p(i,s):(t=fi(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:z,o:z,d(i){i&&Y(e),t&&t.d(i)}}}function ea(n,e,t){let i;Ti(n,Ce,a=>t(1,i=a));let{visible:s=!1}=e;function o(a,l){const c=Gt(Ce);if(!c.engine)return;const f=c.engine.save();f.at={scene:a,node:l};const u=c.engine.load(f);Ce.set({engine:c.engine,viewModel:u})}const r=(a,l)=>o(a,l);return n.$$set=a=>{"visible"in a&&t(0,s=a.visible)},[s,i,o,r]}class ta extends Dt{constructor(e){super(),$t(this,e,ea,Zr,mt,{visible:0})}}function na(n){let e,t;return{c(){e=N("span"),t=L(n[0])},m(i,s){J(i,e,s),p(e,t)},p(i,[s]){s&1&&H(t,i[0])},i:z,o:z,d(i){i&&Y(e)}}}function ia(n,e,t){let{text:i}=e,{speed:s=20}=e,{onComplete:o}=e,r="",a=0,l=null,c=!1;$i(()=>{f()}),Os(()=>{c=!0,l&&(clearInterval(l),l=null)});function f(){if(t(0,r=""),a=0,c=!1,s===0){t(0,r=i),o==null||o();return}l=setInterval(()=>{a<i.length?(t(0,r+=i[a]),a++):(l&&(clearInterval(l),l=null),c||o==null||o())},s)}return n.$$set=u=>{"text"in u&&t(1,i=u.text),"speed"in u&&t(2,s=u.speed),"onComplete"in u&&t(3,o=u.onComplete)},[r,i,s,o]}class sa extends Dt{constructor(e){super(),$t(this,e,ia,na,mt,{text:1,speed:2,onComplete:3})}}function mi(n){let e;return{c(){e=L("_")},m(t,i){J(t,e,i)},d(t){t&&Y(e)}}}function oa(n){let e,t=n[0]&&mi();return{c(){e=N("span"),t&&t.c(),F(e,"class","cursor svelte-l3cu36")},m(i,s){J(i,e,s),t&&t.m(e,null)},p(i,[s]){i[0]?t||(t=mi(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:z,o:z,d(i){i&&Y(e),t&&t.d()}}}function ra(n,e,t){let i=!0;return setInterval(()=>{t(0,i=!i)},500),[i]}class aa extends Dt{constructor(e){super(),$t(this,e,ra,oa,mt,{})}}function gi(n){let e,t;return{c(){e=N("div"),t=L(n[0]),F(e,"class","tooltip svelte-3lmrz0")},m(i,s){J(i,e,s),p(e,t),n[5](e)},p(i,s){s&1&&H(t,i[0])},d(i){i&&Y(e),n[5](null)}}}function la(n){let e,t,i;const s=n[4].default,o=ks(s,n,n[3],null);let r=n[0]&&gi(n);return{c(){e=N("div"),o&&o.c(),t=B(),r&&r.c(),F(e,"class","tooltip-wrapper svelte-3lmrz0")},m(a,l){J(a,e,l),o&&o.m(e,null),p(e,t),r&&r.m(e,null),n[6](e),i=!0},p(a,[l]){o&&o.p&&(!i||l&8)&&Es(o,s,a,a[3],i?Ss(s,a[3],l,null):Ns(a[3]),null),a[0]?r?r.p(a,l):(r=gi(a),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i(a){i||(Z(o,a),i=!0)},o(a){oe(o,a),i=!1},d(a){a&&Y(e),o&&o.d(a),r&&r.d(),n[6](null)}}}function ca(n,e,t){let{$$slots:i={},$$scope:s}=e,{text:o}=e,r,a;function l(){if(!r||!a)return;const u=a.getBoundingClientRect(),h=u.left<8,m=u.right>window.innerWidth-8;h&&(t(2,a.style.left="0",a),t(2,a.style.transform="translateX(0)",a)),m&&(t(2,a.style.left="100%",a),t(2,a.style.transform="translateX(-100%)",a))}$i(()=>(l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)));function c(u){Wt[u?"unshift":"push"](()=>{a=u,t(2,a)})}function f(u){Wt[u?"unshift":"push"](()=>{r=u,t(1,r)})}return n.$$set=u=>{"text"in u&&t(0,o=u.text),"$$scope"in u&&t(3,s=u.$$scope)},[o,r,a,s,i,c,f]}class _s extends Dt{constructor(e){super(),$t(this,e,ca,la,mt,{text:0})}}function pi(n,e,t){const i=n.slice();return i[38]=e[t],i}function _i(n,e,t){const i=n.slice();return i[41]=e[t],i}function yi(n,e,t){const i=n.slice();return i[44]=e[t],i[46]=t,i}function bi(n,e,t){const i=n.slice();return i[35]=e[t],i}function ua(n){let e,t,i,s,o,r,a,l,c,f,u,h=[],m=new Map,_,d,g,y,v,E,S,T,A,w,b,I,U,R,K,W,Q,_e,fe,re,G=n[15][n[11]]+"",P,ie=n[11]===n[12]?" - default value":"",V,C,q,$,ye,be,X,he,le,j,ce=n[14]?"ON":"OFF",we,Ke,se,Me,ke,ve,bt,Vn,je=da(n),wt=Ie(n[0]);const xn=O=>`${O[2]}-${O[3]}-${O[46]}`;for(let O=0;O<wt.length;O+=1){let M=yi(n,wt,O),me=xn(M);m.set(me,h[O]=wi(me,M))}let ae=n[9]&&vi(),We=Ie(n[4].viewModel.choices),de=[];for(let O=0;O<We.length;O+=1)de[O]=ki(_i(n,We,O));A=new _s({props:{text:"Hover over item names to see their description.",$$slots:{default:[pa]},$$scope:{ctx:n}}});const Gn=[ya,_a],Re=[];function Yn(O,M){return O[4].viewModel.inventory.length===0?0:1}return b=Yn(n),I=Re[b]=Gn[b](n),ke=new ta({props:{visible:n[6]}}),{c(){e=N("div"),t=N("div"),i=N("div"),s=N("div"),o=N("h1"),r=L(n[8]),a=B(),l=N("button"),l.textContent="[ Eject Disc ]",c=B(),je&&je.c(),f=B(),u=N("div");for(let O=0;O<h.length;O+=1)h[O].c();_=B(),ae&&ae.c(),d=B(),g=N("div");for(let O=0;O<de.length;O+=1)de[O].c();y=B(),v=N("div"),E=N("div"),S=N("h3"),S.textContent="Inventory",T=B(),Tt(A.$$.fragment),w=B(),I.c(),U=B(),R=N("div"),K=N("h3"),K.textContent="Controls",W=B(),Q=N("button"),Q.textContent="[ Toggle Debug ]",_e=B(),fe=N("button"),re=L("[ Toggle Text Speed - "),P=L(G),V=L(ie),C=L(" ]"),q=B(),$=N("button"),ye=L("[ Theme: "),be=L(n[13]),X=L(" ]"),he=B(),le=N("button"),j=L("[ High Contrast: "),we=L(ce),Ke=L(" ]"),Me=B(),Tt(ke.$$.fragment),F(l,"class","eject"),F(s,"class","title-row"),F(i,"class","header"),F(u,"class","content"),F(g,"class","choices"),F(E,"class","inventory-header"),F(v,"class","inventory"),F(R,"class","controls"),F(t,"class","terminal"),F(e,"class",se=`terminal-wrapper theme-${n[13]} `+(n[14]?"high-contrast":""))},m(O,M){J(O,e,M),p(e,t),p(t,i),p(i,s),p(s,o),p(o,r),p(s,a),p(s,l),p(i,c),je&&je.m(i,null),p(t,f),p(t,u);for(let me=0;me<h.length;me+=1)h[me]&&h[me].m(u,null);p(u,_),ae&&ae.m(u,null),p(t,d),p(t,g);for(let me=0;me<de.length;me+=1)de[me]&&de[me].m(g,null);p(t,y),p(t,v),p(v,E),p(E,S),p(E,T),ut(A,E,null),p(v,w),Re[b].m(v,null),p(t,U),p(t,R),p(R,K),p(R,W),p(R,Q),p(R,_e),p(R,fe),p(fe,re),p(fe,P),p(fe,V),p(fe,C),p(R,q),p(R,$),p($,ye),p($,be),p($,X),p(R,he),p(R,le),p(le,j),p(le,we),p(le,Ke),J(O,Me,M),ut(ke,O,M),ve=!0,bt||(Vn=[Ee(l,"click",n[20]),Ee(Q,"click",n[29]),Ee(fe,"click",n[30]),Ee($,"click",n[16]),Ee(le,"click",n[17])],bt=!0)},p(O,M){if((!ve||M[0]&256)&&H(r,O[8]),je.p(O,M),M[0]&4195343&&(wt=Ie(O[0]),rt(),h=Ds(h,M,xn,1,O,wt,m,u,$s,wi,_,yi),at()),O[9]?ae?M[0]&512&&Z(ae,1):(ae=vi(),ae.c(),Z(ae,1),ae.m(u,null)):ae&&(rt(),oe(ae,1,1,()=>{ae=null}),at()),M[0]&2097168){We=Ie(O[4].viewModel.choices);let Se;for(Se=0;Se<We.length;Se+=1){const Jn=_i(O,We,Se);de[Se]?de[Se].p(Jn,M):(de[Se]=ki(Jn),de[Se].c(),de[Se].m(g,null))}for(;Se<de.length;Se+=1)de[Se].d(1);de.length=We.length}const me={};M[1]&65536&&(me.$$scope={dirty:M,ctx:O}),A.$set(me);let fn=b;b=Yn(O),b===fn?Re[b].p(O,M):(rt(),oe(Re[fn],1,1,()=>{Re[fn]=null}),at(),I=Re[b],I?I.p(O,M):(I=Re[b]=Gn[b](O),I.c()),Z(I,1),I.m(v,null)),(!ve||M[0]&2048)&&G!==(G=O[15][O[11]]+"")&&H(P,G),(!ve||M[0]&6144)&&ie!==(ie=O[11]===O[12]?" - default value":"")&&H(V,ie),(!ve||M[0]&8192)&&H(be,O[13]),(!ve||M[0]&16384)&&ce!==(ce=O[14]?"ON":"OFF")&&H(we,ce),(!ve||M[0]&24576&&se!==(se=`terminal-wrapper theme-${O[13]} `+(O[14]?"high-contrast":"")))&&F(e,"class",se);const Hn={};M[0]&64&&(Hn.visible=O[6]),ke.$set(Hn)},i(O){if(!ve){for(let M=0;M<wt.length;M+=1)Z(h[M]);Z(ae),Z(A.$$.fragment,O),Z(I),Z(ke.$$.fragment,O),ve=!0}},o(O){for(let M=0;M<h.length;M+=1)oe(h[M]);oe(ae),oe(A.$$.fragment,O),oe(I),oe(ke.$$.fragment,O),ve=!1},d(O){O&&(Y(e),Y(Me)),je&&je.d();for(let M=0;M<h.length;M+=1)h[M].d();ae&&ae.d(),Ct(de,O),ft(A),Re[b].d(),ft(ke,O),bt=!1,Ue(Vn)}}}function fa(n){let e,t,i,s,o,r,a,l,c,f,u,h,m,_=n[15][n[11]]+"",d,g=n[11]===n[12]?" - default value":"",y,v,E,S,T,A,w,b,I,U,R=n[14]?"ON":"OFF",K,W,Q,_e,fe,re=Ie(n[18]),G=[];for(let P=0;P<re.length;P+=1)G[P]=Ei(bi(n,re,P));return{c(){e=N("div"),t=N("div"),i=N("h1"),i.textContent="Insert Game Disc",s=B(),o=N("div");for(let P=0;P<G.length;P+=1)G[P].c();r=B(),a=N("div"),l=N("h3"),l.textContent="Controls",c=B(),f=N("button"),f.textContent="[ Toggle Debug ]",u=B(),h=N("button"),m=L("[ Toggle Text Speed - "),d=L(_),y=L(g),v=L(" ]"),E=B(),S=N("button"),T=L("[ Theme: "),A=L(n[13]),w=L(" ]"),b=B(),I=N("button"),U=L("[ High Contrast: "),K=L(R),W=L(" ]"),F(o,"class","choices"),F(a,"class","controls"),F(t,"class","terminal"),F(e,"class",Q=`terminal-wrapper theme-${n[13]} `+(n[14]?"high-contrast":""))},m(P,ie){J(P,e,ie),p(e,t),p(t,i),p(t,s),p(t,o);for(let V=0;V<G.length;V+=1)G[V]&&G[V].m(o,null);p(t,r),p(t,a),p(a,l),p(a,c),p(a,f),p(a,u),p(a,h),p(h,m),p(h,d),p(h,y),p(h,v),p(a,E),p(a,S),p(S,T),p(S,A),p(S,w),p(a,b),p(a,I),p(I,U),p(I,K),p(I,W),_e||(fe=[Ee(f,"click",n[26]),Ee(h,"click",n[27]),Ee(S,"click",n[16]),Ee(I,"click",n[17])],_e=!0)},p(P,ie){if(ie[0]&786432){re=Ie(P[18]);let V;for(V=0;V<re.length;V+=1){const C=bi(P,re,V);G[V]?G[V].p(C,ie):(G[V]=Ei(C),G[V].c(),G[V].m(o,null))}for(;V<G.length;V+=1)G[V].d(1);G.length=re.length}ie[0]&2048&&_!==(_=P[15][P[11]]+"")&&H(d,_),ie[0]&6144&&g!==(g=P[11]===P[12]?" - default value":"")&&H(y,g),ie[0]&8192&&H(A,P[13]),ie[0]&16384&&R!==(R=P[14]?"ON":"OFF")&&H(K,R),ie[0]&24576&&Q!==(Q=`terminal-wrapper theme-${P[13]} `+(P[14]?"high-contrast":""))&&F(e,"class",Q)},i:z,o:z,d(P){P&&Y(e),Ct(G,P),_e=!1,Ue(fe)}}}function ha(n){let e,t,i,s,o;return{c(){e=N("div"),t=N("div"),i=N("pre"),s=L(n[5]),F(i,"class","error"),F(t,"class","terminal"),F(e,"class",o=`terminal-wrapper theme-${n[13]} `+(n[14]?"high-contrast":""))},m(r,a){J(r,e,a),p(e,t),p(t,i),p(i,s)},p(r,a){a[0]&32&&H(s,r[5]),a[0]&24576&&o!==(o=`terminal-wrapper theme-${r[13]} `+(r[14]?"high-contrast":""))&&F(e,"class",o)},i:z,o:z,d(r){r&&Y(e)}}}function da(n){let e,t,i=n[4].viewModel.sceneId+"",s,o,r=n[4].viewModel.nodeId+"",a;return{c(){e=N("div"),t=N("i"),s=L(i),o=L("."),a=L(r),F(e,"class","node")},m(l,c){J(l,e,c),p(e,t),p(t,s),p(t,o),p(t,a)},p(l,c){c[0]&16&&i!==(i=l[4].viewModel.sceneId+"")&&H(s,i),c[0]&16&&r!==(r=l[4].viewModel.nodeId+"")&&H(a,r)},d(l){l&&Y(e)}}}function ma(n){let e,t;return e=new sa({props:{text:n[44],speed:n[10],onComplete:n[46]===n[0].length-1?n[22]:void 0}}),{c(){Tt(e.$$.fragment)},m(i,s){ut(e,i,s),t=!0},p(i,s){const o={};s[0]&1&&(o.text=i[44]),s[0]&1024&&(o.speed=i[10]),s[0]&1&&(o.onComplete=i[46]===i[0].length-1?i[22]:void 0),e.$set(o)},i(i){t||(Z(e.$$.fragment,i),t=!0)},o(i){oe(e.$$.fragment,i),t=!1},d(i){ft(e,i)}}}function ga(n){let e,t=n[44]+"",i;return{c(){e=N("span"),i=L(t)},m(s,o){J(s,e,o),p(e,i)},p(s,o){o[0]&1&&t!==(t=s[44]+"")&&H(i,t)},i:z,o:z,d(s){s&&Y(e)}}}function wi(n,e){let t,i,s,o;const r=[ga,ma],a=[];function l(c,f){return c[1]?0:1}return i=l(e),s=a[i]=r[i](e),{key:n,first:null,c(){t=N("p"),s.c(),this.first=t},m(c,f){J(c,t,f),a[i].m(t,null),o=!0},p(c,f){e=c;let u=i;i=l(e),i===u?a[i].p(e,f):(rt(),oe(a[u],1,1,()=>{a[u]=null}),at(),s=a[i],s?s.p(e,f):(s=a[i]=r[i](e),s.c()),Z(s,1),s.m(t,null))},i(c){o||(Z(s),o=!0)},o(c){oe(s),o=!1},d(c){c&&Y(t),a[i].d()}}}function vi(n){let e,t;return e=new aa({}),{c(){Tt(e.$$.fragment)},m(i,s){ut(e,i,s),t=!0},i(i){t||(Z(e.$$.fragment,i),t=!0)},o(i){oe(e.$$.fragment,i),t=!1},d(i){ft(e,i)}}}function ki(n){let e,t,i=n[41].text+"",s,o,r,a,l;function c(){return n[28](n[41])}return{c(){e=N("button"),t=L("> "),s=L(i),o=B(),e.disabled=r=!n[41].enabled},m(f,u){J(f,e,u),p(e,t),p(e,s),p(e,o),a||(l=Ee(e,"click",c),a=!0)},p(f,u){n=f,u[0]&16&&i!==(i=n[41].text+"")&&H(s,i),u[0]&16&&r!==(r=!n[41].enabled)&&(e.disabled=r)},d(f){f&&Y(e),a=!1,l()}}}function pa(n){let e;return{c(){e=N("div"),e.textContent="i",F(e,"class","info-icon")},m(t,i){J(t,e,i)},p:z,d(t){t&&Y(e)}}}function _a(n){let e,t,i=Ie(n[4].viewModel.inventory),s=[];for(let r=0;r<i.length;r+=1)s[r]=Si(pi(n,i,r));const o=r=>oe(s[r],1,1,()=>{s[r]=null});return{c(){e=N("ul");for(let r=0;r<s.length;r+=1)s[r].c()},m(r,a){J(r,e,a);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);t=!0},p(r,a){if(a[0]&16){i=Ie(r[4].viewModel.inventory);let l;for(l=0;l<i.length;l+=1){const c=pi(r,i,l);s[l]?(s[l].p(c,a),Z(s[l],1)):(s[l]=Si(c),s[l].c(),Z(s[l],1),s[l].m(e,null))}for(rt(),l=i.length;l<s.length;l+=1)o(l);at()}},i(r){if(!t){for(let a=0;a<i.length;a+=1)Z(s[a]);t=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)oe(s[a]);t=!1},d(r){r&&Y(e),Ct(s,r)}}}function ya(n){let e;return{c(){e=N("p"),e.textContent="(empty)",F(e,"class","muted")},m(t,i){J(t,e,i)},p:z,i:z,o:z,d(t){t&&Y(e)}}}function ba(n){let e,t=n[38].name+"",i;return{c(){e=N("span"),i=L(t),F(e,"class","inventory-item")},m(s,o){J(s,e,o),p(e,i)},p(s,o){o[0]&16&&t!==(t=s[38].name+"")&&H(i,t)},d(s){s&&Y(e)}}}function Si(n){let e,t,i,s;return t=new _s({props:{text:n[38].description,$$slots:{default:[ba]},$$scope:{ctx:n}}}),{c(){e=N("li"),Tt(t.$$.fragment),i=B()},m(o,r){J(o,e,r),ut(t,e,null),p(e,i),s=!0},p(o,r){const a={};r[0]&16&&(a.text=o[38].description),r[0]&16|r[1]&65536&&(a.$$scope={dirty:r,ctx:o}),t.$set(a)},i(o){s||(Z(t.$$.fragment,o),s=!0)},o(o){oe(t.$$.fragment,o),s=!1},d(o){o&&Y(e),ft(t)}}}function Ei(n){let e,t,i;function s(){return n[25](n[35])}return{c(){e=N("button"),e.textContent=`> ${n[35].title} `},m(o,r){J(o,e,r),t||(i=Ee(e,"click",s),t=!0)},p(o,r){n=o},d(o){o&&Y(e),t=!1,i()}}}function wa(n){let e,t,i,s;const o=[ha,fa,ua],r=[];function a(l,c){return l[5]?0:l[7]?l[4].viewModel?2:-1:1}return~(e=a(n))&&(t=r[e]=o[e](n)),{c(){t&&t.c(),i=Li()},m(l,c){~e&&r[e].m(l,c),J(l,i,c),s=!0},p(l,c){let f=e;e=a(l),e===f?~e&&r[e].p(l,c):(t&&(rt(),oe(r[f],1,1,()=>{r[f]=null}),at()),~e?(t=r[e],t?t.p(l,c):(t=r[e]=o[e](l),t.c()),Z(t,1),t.m(i.parentNode,i)):t=null)},i(l){s||(Z(t),s=!0)},o(l){oe(t),s=!1},d(l){l&&Y(i),~e&&r[e].d(l)}}}function va(n,e,t){let i;Ti(n,Ce,C=>t(4,i=C));let s=null,o=!1,r=null,a=null,l=[],c=0,f=!1,u=10,h=!1,m=null,_=0,d=[];const g=["slow","normal","fast","rapid","instant"];let y=1,v=1,E="dark",S=!1;function T(){t(13,E=E==="dark"?"light":"dark")}function A(){t(14,S=!S)}const w=vr(),b=[];for(const[C,q]of Object.entries(w))try{const $=Pe(q.raw.game,"game.yaml").value;b.push({id:C,title:$.game.title})}catch{}function I(C){try{const q=w[C];if(!q)throw new Error(`Game "${C}" not found`);const $=q.raw,ye=Pe($.game,"game.yaml").value,be=Pe($.rules,"rules.yaml").value,X=Pe($.state,"state.yaml").value,he=Pe($.items,"items.yaml").value,le={};for(const[ke,ve]of Object.entries($.scenes))le[ke]=Pe(ve,`scenes/${ke}`).value;Q(ye.game.ui.text_speed);const j={};for(const[ke,ve]of Object.entries($.localization)){const bt=ke.replace(/\.ya?ml$/,"");j[bt]=Pe(ve,`localization/${ke}`).value}const ce=ye.game.ui.text_speed;t(12,v=g.indexOf(ce)),v===-1&&t(12,v=1),t(11,y=v);const we={manifest:ye,rules:be,state:X,items:he,scenes:le,localization:j};kr(we);const Ke=$r(we),se=new Qr(Ke),Me=se.start();Ce.set({engine:se,viewModel:Me}),t(7,r=C),t(8,a=ye.game.title),t(5,s=null)}catch(q){t(5,s=q instanceof Error?q.toString():String(q))}}function U(){t(7,r=null),t(8,a=null),Ce.set({engine:null,viewModel:null})}function R(C){const q=Gt(Ce);if(q.engine)try{console.groupCollapsed(`[UI] choose("${C}")`),console.log("Before:",{at:q.engine.getCurrentNodeRef(),visibleState:q.engine.getFullState()});const $=q.engine.choose(C);console.log("After:",{at:q.engine.getCurrentNodeRef(),visibleState:q.engine.getFullState(),vm:{sceneId:$.sceneId,nodeId:$.nodeId,choices:$.choices.map(ye=>ye.id)}}),console.log("NEW VM TEXT:",$.text),Ce.set({engine:q.engine,viewModel:$}),t(5,s=null)}catch($){console.error("[UI] choose failed:",$),t(5,s=$ instanceof Error?$.toString():String($))}finally{console.groupEnd()}}function K(C){c=0,h?(t(0,l=[...C]),t(9,f=!1)):(t(0,l=C.length>0?[C[0]]:[]),t(9,f=C.length>0))}function W(){const C=Gt(Ce).viewModel;!C||`${C.sceneId}:${C.nodeId}`!==m||(c++,c<C.text.length?t(0,l=[...l,C.text[c]]):t(9,f=!1))}function Q(C){if(t(1,h=!1),typeof C=="number"){t(10,u=Math.max(0,C)),u===0&&t(1,h=!0);return}switch(C){case"slow":t(10,u=40);break;case"normal":t(10,u=20);break;case"fast":t(10,u=10);break;case"rapid":t(10,u=5);break;case"instant":t(10,u=0),t(1,h=!0);break;default:t(10,u=20)}}function _e(){t(11,y=(y+1)%g.length);const C=g[y];Q(C);const q=Gt(Ce).viewModel;q&&(t(3,_++,_),c=0,h?(t(0,l=[...q.text]),t(9,f=!1)):(t(0,l=q.text.length>0?[q.text[0]]:[]),t(9,f=q.text.length>0)))}const fe=C=>I(C.id),re=()=>t(6,o=!o),G=()=>_e(),P=C=>R(C.id),ie=()=>t(6,o=!o),V=()=>_e();return n.$$.update=()=>{if(n.$$.dirty[0]&16777247&&i.viewModel){const C=i.viewModel,q=`${C.sceneId}:${C.nodeId}`,$=C.text,ye=!m,be=q===m;if(ye)t(2,m=q),t(24,d=[...$]),t(3,_++,_),K($);else if(!be)t(2,m=q),t(24,d=[...$]),t(3,_++,_),K($);else if($.length>d.length&&$.slice(0,d.length).every((he,le)=>he===d[le])){t(24,d=[...$]);const he=$.slice(l.length);he.length>0&&(h?(t(0,l=[...l,...he]),t(9,f=!1)):(t(0,l=[...l,he[0]]),c=l.length-1,t(9,f=!0)))}else($.length!==d.length||!$.every((he,le)=>he===d[le]))&&(t(24,d=[...$]),t(3,_++,_),K($))}},[l,h,m,_,i,s,o,r,a,f,u,y,v,E,S,g,T,A,b,I,U,R,W,_e,d,fe,re,G,P,ie,V]}class ka extends Dt{constructor(e){super(),$t(this,e,va,wa,mt,{},null,[-1,-1])}}new ka({target:document.getElementById("app")});
